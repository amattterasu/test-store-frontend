export type InitialStateType = {
    items: any
}

const initialState: InitialStateType = {
    items: []
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