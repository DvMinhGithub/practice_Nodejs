import { useDispatch } from "react-redux"
import { actions } from "../actions"

const UseSignUp = () => {
    const dispatch = useDispatch();

    const signUp = (data) => dispatch(actions.signUpRequest(data))

    return {
        signUp,
    }
}

export default UseSignUp