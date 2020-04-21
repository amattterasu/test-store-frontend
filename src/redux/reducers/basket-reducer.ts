import {ADD_TO_BASKET, ItemsType, QTY_DOWN, QTY_UP, REMOVE_FROM_BASKET} from "../../types/types";

type QuantityType = {
    id: number
    count: number
}

type InitialStateType = {
    items: Array<ItemsType>
    quantity: any
    totalPrice: number
    totalCount: number
}

const initialState = {
    items: [] as Array<ItemsType>,
    quantity: [
        {id: 0, count: 0},
        {id: 1, count: 0},
        {id: 2, count: 0},
        {id: 3, count: 0},
        {id: 4, count: 0},
        {id: 5, count: 0},
        {id: 6, count: 0},
        {id: 7, count: 0},
        {id: 8, count: 0},
        {id: 9, count: 0},
        {id: 10, count: 0},
        {id: 11, count: 0},
        {id: 12, count: 0},
        {id: 13, count: 0},
        {id: 14, count: 0},
    ],
    totalPrice: 0,
    totalCount: 0
}


const basketReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload.obj
                ],
                quantity: [
                    ...state.quantity,
                    state.quantity.map((item: QuantityType) => {
                        return item.id === action.payload.id ? item.count += 1 : item.count += 0
                    })
                ],
                totalPrice: state.totalPrice + action.payload.obj.price,
                totalCount: state.totalCount += 1

            }
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                items: state.items.filter((obj: ItemsType) => obj.id !== action.payload.id),
                totalPrice: state.totalPrice - action.payload.sameTypePrice,
                totalCount: state.totalCount - action.payload.count
            }
        case QTY_UP:
            return {
                ...state,
                quantity: [
                    ...state.quantity,
                    state.quantity.map((item: QuantityType) => {
                        return item.id === action.payload.id ? item.count += 1 : item.count += 0
                    }),
                ],
                totalPrice: state.totalPrice + action.payload.obj.price,
                totalCount: state.totalCount += 1

            }
        case QTY_DOWN:
            return {
                ...state,
                quantity: [
                    ...state.quantity,
                    state.quantity.map((item: QuantityType) => {
                        return item.id === action.payload.id ? item.count -= 1 : item.count += 0
                    })
                ],
                totalPrice: state.totalPrice - action.payload.obj.price,
                totalCount: state.totalCount -= 1
            }
        default:
            return state
    }
}

export default basketReducer