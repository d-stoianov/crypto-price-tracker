import HomePage from '@/pages'
import CoinOverview from '@/pages/coin-overview'
import ErrorPage from '@/pages/error-page'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

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

const router = createBrowserRouter(routes)

export default router
