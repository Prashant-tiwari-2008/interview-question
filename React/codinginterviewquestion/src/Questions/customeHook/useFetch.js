import { useState, useEffect ,useMemo} from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()

    const getData = useMemo(() => async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const res = await response.json();
            setData(res)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    },[url])

    useEffect(() => {
        getData();
    }, [url])

    return ({
        loading, data, error
    })
}

export default useFetch;