const CoinDescription = ({
    title,
    description,
}: {
    title: string
    description: string
}) => {
    return (
        <section className="flex flex-col gap-2 rounded-sm bg-slate-600 p-2 px-4 ">
            <h1 className="text-2xl text-white">{title}</h1>
            <p
                className="text-gray-200"
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            ></p>
        </section>
    )
}

export default CoinDescription
