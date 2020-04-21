import {ItemsType} from "../../types/types";

type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    payload: number
}

type RemoveFromBasketActionPayloadType = {
    obj: ItemsType
    id: number
    sameTypePrice: number
    count: number
}

type RemoveFromBasketActionType = {
    type: 'REMOVE_FROM_BASKET'
    payload: RemoveFromBasketActionPayloadType
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: 'SET_CURRENT_PAGE',
    payload: currentPage
})

export const removeFromBasket = (obj: ItemsType, id: number, sameTypePrice: number, count: number): RemoveFromBasketActionType => ({
    type: 'REMOVE_FROM_BASKET',
    payload: {
        obj,
        id,
        sameTypePrice,
        count
    }
})

