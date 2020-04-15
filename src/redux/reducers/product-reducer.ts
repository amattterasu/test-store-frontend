import {IProduct} from "../interfaces";

export type InitialStateType = {
    category1: any
    category2: any
    category3: any
}

const initialState: InitialStateType = {

    category1: [
        {
            id: 1,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 710,
        },
        {
            id: 1,
            title: "Происхождение2",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
        },
    ],
    category2: [
        {
            id: 2,
            title: "Происхождение3",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 3720,
        },
    ],
    category3: [
        {
            id: 3,
            title: "Происхождение5",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 3222,
        },
        {
            id: 3,
            title: "Происхождение5",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 3222,
        },
        {
            id: 3,
            title: "Происхождение5",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 3222,
        },
        {
            id: 3,
            title: "Происхождение5",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 3222,
        },
        {
            id: 3,
            title: "Происхождение5",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 3222,
        },

    ]

}

const productReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
            }
        default:
            return state
    }
}

export default productReducer