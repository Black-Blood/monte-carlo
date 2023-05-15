import React from 'react'

import QualityN23 from '../utils/QualityN23'
import Field from './Field'
import GraphN23 from '../utils/GraphN23'

interface IQuality {
    count: number
    quality: QualityN23
}

export default function Quality(props: IQuality) {
    return (
        <fieldset className='fieldset'>
            <legend className='fieldset__title'>Результати вимірювань (N={props.count}):</legend>

            <Field
                labelText='Точна площа'
                value={GraphN23.area}
                readOnly />

            <Field
                labelText='Середньоквадратичне відхилення'
                value={props.quality.standartDeviation}
                readOnly />

            <Field
                labelText='Матиматичне очікування'
                value={props.quality.expectation}
                readOnly />

            <Field
                labelText='Абсолютна похибка'
                value={'≈' + props.quality.approximationError}
                readOnly />
        </fieldset>
    )
}