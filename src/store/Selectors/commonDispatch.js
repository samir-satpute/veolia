import { setUser, removeCurrentUser } from "../../store/reducers/Common/commonReducer";
export const mapDispatchToProps = dispatch => {
    return {
        setUser: (paylaod) => {
            dispatch(setUser({

                name: paylaod.name,
                role: 'user',
                isSignedIn: true

            }))
        },
        removeCurrentUser: () => {
            dispatch(removeCurrentUser())
        }

    }




}