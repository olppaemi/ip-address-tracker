import { IpGeoLocationInfoType } from "../types";

export async function getVisitorIP(): Promise<string> {
  const resp = await fetch("https://api.ipify.org?format=json");
  const data = await resp.json();
  return data.ip;
}

export async function getIpGeoLocationInfo(
  ip: string
): Promise<IpGeoLocationInfoType> {
  const resp = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEO_API_KEY}&ipAddress=${ip}`
  );
  const data = await resp.json();
  return data;
}
