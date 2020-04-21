//product
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'

//basket
export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const QTY_UP = 'QTY_UP'
export const QTY_DOWN = 'QTY_DOWN'

export type ItemsType = {
    id: number
    title: string
    image: string
    price: number
    pageNumber?: number
}

export type CategoryType = {
    id: number
    title: string
    image: string
    url: string
}
