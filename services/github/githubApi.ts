import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";
import { SearchResponse, SortParams } from "./types";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.NEXT_PUBLIC_GITHUB_API_URL || "https://api.github.com/",
    prepareHeaders: async (headers) => {
      const session = await getSession();
      if (session?.accessToken) {
        headers.set('authorization', `Bearer ${session.accessToken}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    searchRepositories: builder.query<SearchResponse, SortParams>({
      query: ({ q, page, per_page, sort, order }) => ({
        url: "search/repositories",
        params: {
          q,
          page,
          per_page,
          sort,
          order,
        },
      }),
    }),
  }),
});

export const { useSearchRepositoriesQuery } = githubApi;
