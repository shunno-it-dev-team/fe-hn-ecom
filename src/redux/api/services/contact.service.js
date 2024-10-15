import { apiService } from "../apiService";

const contactApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (body) => ({
        url: "contacts",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateContactMutation } = contactApi;
