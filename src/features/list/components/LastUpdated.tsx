import { formatWithLeadingZeros } from '@/utils/strings'

const LastUpdated = ({ date }: { date: Date }) => {
    return (
        <p className="text-white">
            Last updated: {formatWithLeadingZeros(date.getHours())}:
            {formatWithLeadingZeros(date.getMinutes())}:
            {formatWithLeadingZeros(date.getSeconds())}
        </p>
    )
}

export default LastUpdated
