import { combineReducers } from "redux";
import Reducers from './reducers/Reducers';

const AllReducers = combineReducers({
    reducer:Reducers,
})

export default AllReducers;