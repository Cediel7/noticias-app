import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../api/newsSlice";

const Details = () => {
    const { articleUri } = useParams();
    console.log(articleUri);

    const {data, isLoading, isError} = useGetEventDetailsQuery({
        articleUri,
        action: "getArticle",
        infoArticleBodyLen: -1,
        resultType: "info",
    })
    return (
        <div className='flex flex-col justify-center dark:bg-gray-800 content-center items-center w-full min-h-screen dark:text-white'>
        Details
        {JSON.stringify(data)}
    </div>
)
}

export default Details;