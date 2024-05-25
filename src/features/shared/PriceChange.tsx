const PriceChange = ({ value }: { value: number }) => {
    const isNegative = Math.sign(value) === -1

    if (isNegative) {
        return <p className=" text-red-400">{`${value}%`}</p>
    }

    return <p className="col-span-1 text-green-400">{`+${value}%`}</p>
}

export default PriceChange
