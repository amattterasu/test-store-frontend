import {combineReducers} from "redux"
import productReducer from './product-reducer'
import basketReducer from "./basket-reducer";

import {IRootReducer} from "../interfaces"

const rootReducer = combineReducers({
    product: productReducer,
    basket: basketReducer
})

export default rootReducer