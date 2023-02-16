import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// import logger from "redux-logger";

import { rootReducer } from "./reducers/rootReducers";
import { initialState } from "./state";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
