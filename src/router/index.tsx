import HomePage from '@/pages'
import ErrorPage from '@/pages/error-page'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
]

const router = createBrowserRouter(routes)

export default router
