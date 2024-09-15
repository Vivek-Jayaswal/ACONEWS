import { useEffect, useState } from "react"
import axios from "axios";
import CategoryCard from "../Card/TopHeadlineCard";
import { useSearchParams } from "react-router-dom";

const Business = () => {
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();
    const country = searchParams.get("country");
    const language = searchParams.get("language");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`https://gnews.io/api/v4/top-headlines?apikey=${"67fe6e570de03e9b838a3cdd3250e188"}&category=business&country=${country}&lang=${language}&max=100`);
                const orignelData = response.data.articles;
                setData(orignelData)
            } catch (error) {
                alert(`${error}`)
            } finally {
                setLoading(false)
            }
        }
        if (country && language) {
            fetchData()
        }
    }, [country, language])
    return (
        <>
            {
                loading ? <p className="loading">loading......</p> : <CategoryCard data={data} />
            }

        </>)
}

export default Business;