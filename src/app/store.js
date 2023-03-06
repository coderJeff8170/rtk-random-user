import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/users";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getDefaultNormalizer } from "@testing-library/react";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);
