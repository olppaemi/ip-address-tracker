import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ipApi = createApi({
  reducerPath: "ipApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.ipify.org?format=json" }),
  tagTypes: ["Ip"],
  endpoints: (builder) => ({
    getIp: builder.query<Ip, void>({
      query: () => "",
    }),
  }),
});

export const { useGetIpQuery } = ipApi;

interface Ip {
  ip: string;
}
