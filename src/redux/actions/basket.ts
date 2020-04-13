export const addToBasket = (obj: any) => ({
    type: 'ADD_TO_BASKET',
    payload: obj
})

export const removeFromBasket = (id: number) => ({
    type: 'REMOVE_FROM_BASKET',
    payload: id
})