import { combineReducers } from 'redux';
import ItemReducer from "./itemReducer";
export default combineReducers({
    items: ItemReducer
    
});