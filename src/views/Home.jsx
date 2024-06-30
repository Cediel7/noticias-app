import NewsCarousel from "../components/newsCarousel";

const Home = () => {
    const data = [{image: "https://cdn.betakit.com/wp-content/uploads/2024/06/team_jolt_capital_feature.jpg"}]
    return (
    <div className='flex flex-col justify-center dark:bg-gray-800 content-center items-center w-full min-h-screen dark:text-white'>
        <NewsCarousel data={data} />
    </div>
    )
}

export default Home;