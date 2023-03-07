import { useDispatch, useSelector } from 'react-redux';
import actions from '../actions/authAction';

const UseAuth = () => {
  const dispatch = useDispatch();

  const handleLogin = (data) => dispatch(actions.loginRequest(data))
  return { handleLogin }
}

export default UseAuth;