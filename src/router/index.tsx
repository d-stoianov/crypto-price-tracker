import HomePage from '@/pages/HomePage'
import CoinOverview from '@/pages/CoinOverview'
import ErrorPage from '@/pages/ErrorPage'
import { createHashRouter, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/:coinId',
        element: <CoinOverview />,
    },
]

const router = createHashRouter(routes)

export default router
