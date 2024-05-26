import * as React from 'react'

const ErrorIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}
            className="h-6 w-6"
        >
            <path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 003 21h18a.998.998 0 00.883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
        </svg>
    )
}

const ErrorElement = ({ message }: { message?: string }) => {
    return (
        <div className="flex w-[100%] flex-col items-center justify-center gap-4 rounded-lg bg-slate-300 p-5 shadow-lg md:w-[30rem]">
            <div className="flex items-center gap-2">
                <h1 className="mb-2 text-center text-xl font-semibold text-gray-800">
                    Oops, something went wrong
                </h1>
                <span className="text-red-500">
                    <ErrorIcon />
                </span>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-4">
                    <p>
                        It seems there was an issue with your request. This
                        might be due to a high number of requests being sent to
                        the API.
                    </p>
                    <p>Please wait a few moments and try again.</p>
                    {message && (
                        <p className="mb-4 text-center text-gray-600">
                            Internal error: {message}
                        </p>
                    )}
                </div>
                <a
                    className="mt-4 cursor-pointer rounded text-lg text-black"
                    href="/"
                >
                    Back to main page
                </a>
            </div>
        </div>
    )
}

export default ErrorElement
