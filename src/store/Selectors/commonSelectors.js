import { MapStateToProps } from "react-redux"

export const mapStateToProps=state=>{
    return{
    userName:state.common.user.name,
    role:state.common.user.role,
    isSignedIn:state.common.user.isSignedIn,
}}