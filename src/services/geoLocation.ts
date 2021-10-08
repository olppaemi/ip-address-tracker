import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const geoLocation = createApi({
  reducerPath: "geoLocationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://geo.ipify.org/api/v2`,
  }),
  tagTypes: ["GeoLocation"],
  endpoints: (builder) => ({
    getGeoLocation: builder.query<IResponse, string>({
      query: (ip) =>
        `country,city?apiKey=${process.env.REACT_APP_GEO_API_KEY}&ipAdress=${ip}`,
    }),
  }),
});

export const { useGetGeoLocationQuery } = geoLocation;

interface IResponse {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  domains: string[];
  as: {
    asn: string;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}
