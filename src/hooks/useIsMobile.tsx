import { useEffect, useState } from 'react'

const useIsMobile = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
        return () => {
            window.removeEventListener('resize', () =>
                setWidth(window.innerWidth)
            )
        }
    }, [])

    const isMobile = width < 768

    return isMobile
}

export default useIsMobile
