import { apiService } from "../apiService";

const productApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetProductQuery } = productApi;
