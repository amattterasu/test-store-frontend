import {IProduct} from "../interfaces";

// products is here (dialogs redducer)
export type InitialStateType = {
    name: string
    price: number
}

const initialState: InitialStateType = {
    name: 'asd',
    price: 1200
}

const productReducer = (state = initialState, action: any ): InitialStateType => {

    return state
}

export default productReducer