import commonReducer from "./Common/commonReducer";
import { combineReducers } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
     common:commonReducer
});
