import { configureStore } from "@reduxjs/toolkit";
import { geoLocation } from "../services/geoLocation";
import { ipApi } from "../services/ip";

export const store = configureStore({
  reducer: {
    [ipApi.reducerPath]: ipApi.reducer,
    [geoLocation.reducerPath]: geoLocation.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([ipApi.middleware, geoLocation.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
