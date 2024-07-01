import { useParams } from "react-router-dom";
import { useGetArticleDetailsQuery } from "../api/newsSlice";
import SeeDetails from "../components/SeeDetails";


const Details = () => {
    const { articleUri } = useParams();
    console.log(articleUri);

    const {data, isLoading, isError} = useGetArticleDetailsQuery({
        articleUri,
        action: "getArticle",
        infoArticleBodyLen: -1,
        resultType: "info",
    })

    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    return (
        <div className='flex flex-col justify-center dark:bg-gray-800 content-center items-center w-full min-h-screen dark:text-white'>
           <SeeDetails data = {data} articleUri = {articleUri}/>
        </div>
)
}

export default Details;