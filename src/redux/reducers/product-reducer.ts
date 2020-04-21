import {ItemsType, REMOVE_FROM_BASKET, SET_CURRENT_PAGE} from "../../types/types";

export type InitialStateType = {
    items: Array<ItemsType>
    pageSize: number
    currentPage: number
}

const initialState = {
    items: [
        {
            id: 0,
            title: "g Товар 1",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 5000,
            pageNumber: 1

        },
        {
            id: 1,
            title: "b Товар 2",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 10000,
            pageNumber: 1
        },
        {
            id: 2,
            title: "z Товар 3",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 110000,
            pageNumber: 1
        },
        {
            id: 3,
            title: "a Товар 4",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 120000,
            pageNumber: 1
        },
        {
            id: 4,
            title: "o Товар 5",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 130000,
            pageNumber: 1
        },
        {
            id: 5,
            title: "l Товар 6",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 140000,
            pageNumber: 1
        },
        {
            id: 6,
            title: "m Товар 7",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 110000,
            pageNumber: 1
        },
        {
            id: 7,
            title: "a Товар 8",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 110500,
            pageNumber: 1
        },
        {
            id: 8,
            title: "c Товар 9",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 5000,
            pageNumber: 1
        },
        {
            id: 9,
            title: "d Товар 10",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 5000,
            pageNumber: 1
        },
        {
            id: 10,
            title: "g Товар 11",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 50000,
            pageNumber: 1
        },
        {
            id: 11,
            title: "h Товар 12",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 2355,
            pageNumber: 1
        },
        {
            id: 12,
            title: "i Товар 13",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 5555,
            pageNumber: 2
        },
        {
            id: 13,
            title: "p Товар 14",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 6666,
            pageNumber: 2
        },
        {
            id: 14,
            title: "q Товар 15",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L._AC_SX342_.jpg",
            price: 48484,
            pageNumber: 2
        },
    ] as Array<ItemsType>,
    pageSize: 12,
    currentPage: 1
}

const productReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                items: state.items.filter((obj: ItemsType) => obj.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default productReducer