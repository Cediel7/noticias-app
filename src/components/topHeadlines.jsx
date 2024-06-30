import React from 'react';
import { useGetArticlesQuery } from '../store/newsApi';

const TopHeadlines = () => {
  const { data, error, isLoading } = useGetArticlesQuery({  
      action: "getArticles",
      keyword: "Barack Obama",
      articlesPage: 1,
      articlesCount: 20,
      articlesSortBy: "date",
      articlesSortByAsc: false,
      articlesArticleBodyLen: -1,
      resultType: "articles",
      dataType: "news",
      forceMaxDataTimeWindow: 31
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='flex flex-col justify-center dark:bg-gray-800 content-center items-center'>
      <h1 className='text-7xl font-bold text-gray-900 dark:text-white mb-10'>Top Headlines</h1>
      <ul className='flex flex-wrap gap-4 content-center items-center px-20'>
        {data.articles.results?.map((item) => {
          return (
            <li class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src={item.image} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.title} 
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.body.substring(0, 20)} ...
                    </p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default TopHeadlines;
