import {CategoryType} from "../../types/types";


export type InitialStateType = {
    category1: Array<CategoryType>
    category2: Array<CategoryType>
}

const initialState = {

    category1: [
        {
            id: 1,
            title: "Каталог 1",
            image: "https://topsto-crimea.ru/images/companies/1/santeh/PersonalComputer-1.jpg?1564659341960",
            url: "catalog_1_1",
        },
        {
            id: 1,
            title: "Каталог 2",
            image: "https://topsto-crimea.ru/images/companies/1/santeh/PersonalComputer-1.jpg?1564659341960",
            url: "catalog_1_2"
        },
    ],
    category2: [
        {
            id: 2,
            title: "Подкаталог 1",
            image: "https://topsto-crimea.ru/images/companies/1/santeh/PersonalComputer-1.jpg?1564659341960",
            url: "catalog_2_1"
        },
    ],
}

const catalogReducer = (state = initialState, action: any): InitialStateType => {

    return state
}

export default catalogReducer