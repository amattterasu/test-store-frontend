export type InitialStateType = {
    items: any
    pageSize: number
    currentPage: number
}

const initialState: InitialStateType = {
    items: [
        {
            id: 1,
            title: "Фроисхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 710,
            pageNumber: 1
        },
        {
            id: 2,
            title: "Ароисхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 1
        },
        {
            id: 3,
            title: "Яроисхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 1
        },
        {
            id: 4,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 1
        },
        {
            id: 5,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 1
        },
        {
            id: 6,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 1
        },
        {
            id: 7,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 1
        },
        {
            id: 8,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 1
        },
        {
            id: 9,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 1
        },
        {
            id: 10,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 1
        },
        {
            id: 11,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 1
        },
        {
            id: 12,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 1
        },
        {
            id: 13,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 2
        },
        {
            id: 14,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 2
        },
        {
            id: 15,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 2311,
            pageNumber: 2
        },

    ],
    pageSize: 12,
    currentPage: 1
}

const productReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default productReducer