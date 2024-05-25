const CoinDescription = ({
    title,
    description,
}: {
    title: string
    description: string
}) => {
    return (
        <section className="flex flex-col gap-2 text-white bg-slate-600 p-2 px-4 rounded-sm">
            <h1 className="text-2xl text-slate-100">{title}</h1>
            <p
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            ></p>
        </section>
    )
}

export default CoinDescription
