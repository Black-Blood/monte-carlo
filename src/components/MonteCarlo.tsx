import React, { useId, useState } from 'react'

import QualityN23 from '../utils/QualityN23'
import Field from './Field'
import Graph from './Graph'

interface IQuality {
    count: number
    quality: QualityN23
}

export default function MonteCarlo(props: IQuality) {
    const id = useId()
    const [variant, setVariant] = useState(0)

    return (
        <>
            <fieldset className='fieldset'>
                <legend className='fieldset__title'>Вимірювання (N={props.count}):</legend>

                <Field
                    type='select'
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setVariant(Number(e.target.value) - 1)}
                    labelText='Варіант випробування'>
                    {
                        Array.from(Array(20).keys()).map((key) => (
                            <option key={'option' + id + key}>{key + 1}</option>
                        ))
                    }
                </Field>

                <Field
                    labelText='Площа методом Монте-Карло'
                    value={props.quality.listOfArea[variant]}
                    readOnly />
            </fieldset>

            <Graph dots={props.quality.listOfDots[variant]} />
        </>
    )
}