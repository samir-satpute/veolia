
import { initialState } from "../../state";
import { createSlice } from "@reduxjs/toolkit";
export const commonSlice = createSlice({
    name: 'common',
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.user.name = action.payload.name;
            state.user.role = action.payload.role;
            state.user.isSignedIn = true;
        },
        removeCurrentUser(state, action) {
            state.user.name = '';
            state.user.role = '';
            state.user.isSignedIn = false;
        }


    },
})
export const { setUser,removeCurrentUser } = commonSlice.actions;
export default commonSlice.reducer;
