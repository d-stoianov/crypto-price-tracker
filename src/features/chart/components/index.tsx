import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { CoinChartData } from '../types'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
)

const CoinChart = ({ chartData }: { chartData: CoinChartData }) => {
    const options = {
        responsive: true,
        elements: {
            point: {
                radius: 0,
            },
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                ticks: {
                    color: 'white',
                    callback: () => {
                        return ''
                    },
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    color: 'white',
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
            },
        },
        plugins: {
            tooltip: {
                backgroundColor: '#475569',
                displayColors: false,
            },
        },
    }

    const data = {
        labels: chartData.map((item) =>
            item.y.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            })
        ),
        datasets: [
            {
                data: chartData.map((item) => item.x),
                borderColor: '#60a5fa',
                backgroundColor: '#60a5fa',
            },
        ],
    }

    return <Line options={options} data={data} />
}

export default CoinChart
