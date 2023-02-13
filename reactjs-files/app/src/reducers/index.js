import { combineReducers } from 'redux';
import UploadReducer from './UploadReducer';
export default combineReducers({
    item: UploadReducer,
});
