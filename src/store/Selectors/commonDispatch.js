import { setUser } from "../../store/reducers/Common/commonReducer";
export const mapDispatchToProps = dispatch => {
    return {
        setUser: () => {
            dispatch(setUser({

                name: 'sagar',
                role: 'user',
                isSignedIn: true

            }))
        }

    }
}