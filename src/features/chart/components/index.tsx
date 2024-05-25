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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
)

const options = {
    responsive: true,
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
    labels,
    datasets: [
        {
            label: 'Crypto',
            data: [12, 51, 25.36, 100, 78, 21, 23],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
        },
    ],
}

const CoinChart = () => {
    return <Line options={options} data={data} />
}

export default CoinChart
