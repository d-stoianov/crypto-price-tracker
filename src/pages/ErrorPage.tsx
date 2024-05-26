import ErrorElement from '@/features/shared/ErrorElement'

const ErrorPage = ({ message }: { message?: string }) => {
    return (
        <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 p-4 w-full md:w-auto">
            <ErrorElement message={message} />
        </div>
    )
}

export default ErrorPage
