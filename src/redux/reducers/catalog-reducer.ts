export type InitialStateType = {
    category1: any
    category2: any
}

const initialState: InitialStateType = {

    category1: [
        {
            id: 1,
            title: "Каталог_1_1",
            image: "https://topsto-crimea.ru/images/companies/1/santeh/PersonalComputer-1.jpg?1564659341960",
            url: "catalog_1_1"
        },
        {
            id: 1,
            title: "Каталог_1_2",
            image: "https://topsto-crimea.ru/images/companies/1/santeh/PersonalComputer-1.jpg?1564659341960",
            url: "catalog_1_2"
        },
    ],
    category2: [
        {
            id: 2,
            title: "Каталог_2_1",
            image: "https://topsto-crimea.ru/images/companies/1/santeh/PersonalComputer-1.jpg?1564659341960",
            url: "catalog_2_1"
        },
    ],
}

///???? ????/
const catalogReducer = (state = initialState, action: any): InitialStateType => {

    return state
}

export default catalogReducer