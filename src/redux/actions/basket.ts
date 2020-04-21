import {ItemsType} from "../../types/types";

type ActionPayloadType = {
    obj: ItemsType,
    id: number
}

type AddToBasketActionType = {
    type: 'ADD_TO_BASKET'
    payload: ActionPayloadType
}

type QuantityUpActionType = {
    type: 'QTY_UP'
    payload: ActionPayloadType
}

type QuantityDownActionType = {
    type: 'QTY_DOWN'
    payload: ActionPayloadType
}

export const addToBasket = (obj: ItemsType, id: number): AddToBasketActionType => ({
    type: 'ADD_TO_BASKET',
    payload: {
        obj,
        id
    }
})

export const quantityUp = (obj: ItemsType, id: number): QuantityUpActionType => ({
    type: 'QTY_UP',
    payload: {
        obj,
        id
    }
})

export const quantityDown = (obj: ItemsType, id: number): QuantityDownActionType => ({
    type: 'QTY_DOWN',
    payload: {
        obj,
        id,
    }
})