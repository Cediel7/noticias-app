import React, { useState } from 'react';
import { useGetArticlesQuery } from '../api/newsSlice';
import { NavLink } from 'react-router-dom';


const TopHeadlines = () => {
  const [query, setQuery] = useState("");
  const [articlesCount, setArticlesCount] = useState(10);
  const { data, error, isLoading } = useGetArticlesQuery({
    action: "getArticles",
    keyword: query.split(" "),
    keywordOper: "or",
    articlesPage: 1,
    lang: "eng",
    articlesCount: articlesCount,
    dataType: "news",
    articlesSortBy: "date",
    articlesSortByAsc: false,
    articlesIncludeDuplicates: false,
    resultType: "articles",
    forceMaxDataTimeWindow: 31,
  });

  const handleOnQueryChange = (e) => {
    const { value } = e.target;

    setQuery(value);
  }

  const handleOnArticlesCount = (e) => {
    const { value } = e.target;
    setArticlesCount(value);
  }

  console.log(data);

  if (isLoading) return <div className='flex flex-col justify-center dark:bg-gray-800 content-center items-center w-full min-h-screen dark:text-white'>Loading...</div>;
  if (error) return <div className='flex flex-col justify-center dark:bg-gray-800 content-center items-center w-full'>Error: {error.message}</div>;

  return (
    <div className='flex flex-col justify-center dark:bg-gray-800 content-center items-center w-full'>
      <h1 className='text-7xl font-bold text-gray-900 dark:text-white mb-10'>
        Busqueda de noticias
      </h1>
      <div className="flex justify-between w-full px-20 mb-10">
        <input placeholder='Search' type='text' value={query} onChange={handleOnQueryChange} className="max-w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <select id="countries" value={articlesCount} onChange={handleOnArticlesCount} className="max-w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected >Show elements</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <ul className='flex flex-wrap gap-4 content-center justify-center items-center px-10 md:px-20'>
        {data.articles.results?.map((item, index) => {
          return (
            <li key={`${index}-${item.title}`} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <NavLink to={`/details/${item.uri}`} >
                <img className="rounded-t-lg" src={item.image} alt="" />
              </NavLink>
              <div className="p-5">
                <NavLink to={`/details/${item.uri}`} >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </NavLink>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.body.substring(0, 20)} ...
                </p>

                <NavLink to={`/details/${item.uri}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </NavLink>

              </div>

            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default TopHeadlines;
