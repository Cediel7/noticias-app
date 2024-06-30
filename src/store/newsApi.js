import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://eventregistry.org/api/v1/',
  }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (params) => {
        const urlParms = new URLSearchParams(params)
        urlParms.set("apiKey", import.meta.env.VITE_API_KEY);
        return (
          {
            url: "article/getArticles",
            method: 'GET',
            params: urlParms
          }
        )
      },
    }),
  }),
});

export const { useGetArticlesQuery } = newsApi;