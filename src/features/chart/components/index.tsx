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
                },
            },
            y: {
                ticks: {
                    color: 'white',
                },
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
                fill: true,
                data: chartData.map((item) => item.x),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(255, 99, 132)',
            },
        ],
    }

    return <Line options={options} data={data} />
}

export default CoinChart
