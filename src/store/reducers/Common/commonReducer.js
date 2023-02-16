
import { initialState } from "../../state";
import { createSlice } from "@reduxjs/toolkit";
export const commonSlice = createSlice({
    name: 'common',
    initialState: initialState,
    reducers: {
        setUser(state,action){
            state.user.name=action.payload.name;
            state.user.role=action.payload.role;
            state.user.isSignedIn=true;
        }


    }, 
    })
export const {setUser}  = commonSlice.actions;
export default commonSlice.reducer;
