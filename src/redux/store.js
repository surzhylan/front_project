

import menuReducer from "./menu-reducer";
import reviewsReducer from "./reviews-reducer";
import { combineReducers, legacy_createStore as createStore } from "redux";

let reducers = combineReducers({
    reviewsPage: reviewsReducer,
    menuPage: menuReducer,
});


let store = createStore(reducers);


export default store;





