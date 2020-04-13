export type InitialStateType = {
    items: any
}

const initialState: InitialStateType = {
    items: [
        {
            id: 0,
            title: "Происхождение1",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 710
        },
        {
            id: 1,
            title: "Происхождение2",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 3720
        },
        {
            id: 2,
            title: "Происхождение3",
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            price: 221
        },

    ]
}

const basketReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case 'ADD_PRODUCT_TO_BASKET':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case 'REMOVE_PRODUCT_FROM_BASKET':
            return {
                ...state,
                items: state.items.filter((obj:any) => obj.id !== action.payload)
            }
        default:
            return state
    }
}

export default basketReducer