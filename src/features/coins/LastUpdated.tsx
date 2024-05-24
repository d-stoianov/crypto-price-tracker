const LastUpdated = ({ date }: { date: Date }) => {
    const formatWithLeadingZeros = (number: number) =>
        number.toString().padStart(2, '0')

    return (
        <p className="text-white">
            Last updated: {formatWithLeadingZeros(date.getHours())}:
            {formatWithLeadingZeros(date.getMinutes())}:
            {formatWithLeadingZeros(date.getSeconds())}
        </p>
    )
}

export default LastUpdated
