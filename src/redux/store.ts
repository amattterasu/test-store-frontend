import {applyMiddleware, createStore} from "redux"
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer"

//@ts-ignore
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, applyMiddleware(logger))
export default store

