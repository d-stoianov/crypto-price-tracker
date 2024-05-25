const CoinDescription = ({
    title,
    description,
}: {
    title: string
    description: string
}) => {
    return (
        <section className="flex flex-col gap-2 text-white">
            <h1 className="text-2xl text-slate-300">{title}</h1>
            <p
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            ></p>
        </section>
    )
}

export default CoinDescription
