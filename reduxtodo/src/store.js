import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
const reducer=combineReducers({
    //this containes all reducers
});

const initalState= {};

const middleware =[thunk];

 const store=createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default store;