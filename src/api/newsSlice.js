import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsSlice = createApi({
  reducerPath: 'newsSlice',
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
    getBreakingEvents: builder.query({
      query: (params) => {
        const urlParms = new URLSearchParams(params)
        urlParms.set("apiKey", import.meta.env.VITE_API_KEY);
        return (
          {
            url: "event/getBreakingEvents",
            method: 'GET',
            params: urlParms
          }
        )
      },
    })
  }),
});

export const { useGetArticlesQuery, useGetBreakingEventsQuery } = newsSlice;