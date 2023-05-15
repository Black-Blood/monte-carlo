import React, { useRef } from 'react'

import Quality from './Quality'
import MonteCarlo from './MonteCarlo'
import QualityN23 from '../utils/QualityN23'


export default function App() {
    const
        quality100 = useRef(new QualityN23(100)),
        quality1000 = useRef(new QualityN23(1000))

    return (
        <div className='page'>
            <div className='page__side'>
                <MonteCarlo count={100} quality={quality100.current} />
                <Quality count={100} quality={quality100.current} />
            </div>
            <div className='page__side'>
                <MonteCarlo count={1000} quality={quality1000.current} />
                <Quality count={1000} quality={quality1000.current} />
            </div>
        </div>
    )
}