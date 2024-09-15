import { useEffect, useState } from "react"
import axios from "axios";
import CategoryCard from "../Card/TopHeadlineCard";
import {useSearchParams } from "react-router-dom";
import { API_KEY } from "./key";

const Health = () => {
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();
    const country = searchParams.get("country");
    const language = searchParams.get("language");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=health&apikey=${API_KEY}&country=${country}&lang=${language}`);
                const orignelData = response.data.articles;
                setData(orignelData)
            } catch (error) {
                alert(`${error}`)
            } finally {
                setLoading(false)
            }
        }
        if (country && language) {
            fetchData();
        }
    }, [country, language])
    return (
        <>
            {
                loading ? <p className="loading">Loading.......</p> : <CategoryCard data={data} />
            }
        </>
    )
}
export default Health;