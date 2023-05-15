import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    registerables
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import DotN23 from '../utils/DotN23'
import Gra from '../utils/GraphN23'

ChartJS.register(
    ...registerables,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)



export interface IGraph {
    dots: DotN23[]
}

export default function Graph(props: IGraph) {
    const lineDots: DotN23[] = Array.from(Array(1001).keys()).map((x => ({
        x: 23 + x * 0.023,
        y: Gra.getY(23 + x * 0.023)
    })))

    const options = {
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Метод Монте-Карло N = ' + props.dots.length,
                font: {
                    family: 'Times New Roman',
                    weight: '400',
                    size: 24
                }
            },
        },
        scales: {
            x: {
                min: 23,
                max: 46,
                labels: Array.from(Array(24).keys()).map(x => x + 23),
                ticks: {
                    stepSize: 1
                }
            }
        },
        aspectRatio: 1.618
    }

    return (
        <div style={{ width: '100%' }}>
            <Chart
                width="100%"
                type="bubble"
                options={options}
                data={{
                    datasets: [
                        {
                            type: 'line' as const,
                            label: 'Графік функції',
                            data: lineDots,
                            backgroundColor: 'darkgreen',
                            borderColor: 'darkgreen',
                            pointRadius: 0
                        },
                        {
                            type: 'bubble' as const,
                            label: 'Випадкові точки',
                            data: props.dots,
                            backgroundColor: 'rgb(254, 172, 172)',
                        }
                    ],
                }} />
        </div>
    )
}
