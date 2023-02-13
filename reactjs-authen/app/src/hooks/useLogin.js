import { useDispatch } from "react-redux"
import { actions } from "../actions"

const UseSignUp = () => {
    const dispatch = useDispatch();

    const login = (data) => dispatch(actions.loginRequest(data))

    return {
        login,
    }
}

export default UseSignUp