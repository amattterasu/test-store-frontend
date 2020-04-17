import {combineReducers} from "redux"
import productReducer from './product-reducer'
import basketReducer from './basket-reducer'
import catalogReducer from './catalog-reducer'

const rootReducer = combineReducers({
    products: productReducer,
    basket: basketReducer,
    catalogs: catalogReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer