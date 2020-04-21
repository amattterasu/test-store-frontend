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
            image: "https://www.re-store.ru/upload/resize_cache/iblock/7e3/1120_1496_17f5c944b3b71591cc9304fac25365de2/7e3d1b0cd09a706a56f1ae42c327368f.jpg",
            url: "catalog_1_1",
        },
        {
            id: 1,
            title: "Каталог 2",
            image: "https://www.re-store.ru/upload/resize_cache/iblock/cf9/1120_656_17f5c944b3b71591cc9304fac25365de2/cf93ab00b34e4293141072c5e06a5648.jpg",
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