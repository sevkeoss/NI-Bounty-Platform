/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Bounty {
  id: string;
  price: NonNullable<number>;
  description: NonNullable<string>;
  lister: string;
  createdAt: string;
}

export type CreateBounty = Pick<Bounty, "description" | "price">;

// Define a service using a base URL and expected endpoints
export const bountiesApiSlice = createApi({
  reducerPath: "bounties",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:4000",
  }),
  endpoints: (builder) => ({
    getBounties: builder.query<Bounty[], void>({
      query: () => "/bounties",
      providesTags: ["Post"],
    }),
    createBounty: builder.mutation<Bounty, CreateBounty>({
      query: (newBounty: CreateBounty) => ({
        url: "/bounty",
        method: "POST",
        body: newBounty,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBountiesQuery, useCreateBountyMutation } =
  bountiesApiSlice;
