/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CreateBounty } from "./types";
import type { Bounty } from "../app/bounties/types";

// Define a service using a base URL and expected endpoints
export const bountiesApiSlice = createApi({
  reducerPath: "bountiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:4000",
  }),
  endpoints: (builder) => ({
    getBounties: builder.query<Bounty[], void>({
      query: () => "/bounties",
    }),
    createBounty: builder.mutation<Bounty, CreateBounty>({
      query: (newBounty) => ({
        url: "/bounty",
        method: "POST",
        body: newBounty,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBountiesQuery, useCreateBountyMutation } =
  bountiesApiSlice;
