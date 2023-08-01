import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import {userReducer} from "./components/redux/reducers/userReducer";

const rootReducer = combineReducers({
    userList:userReducer
})

const initalState = {}
const middleware = [thunk];

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
