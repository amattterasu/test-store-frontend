import React from 'react';
import {AppStateType} from "../redux/reducers/rootReducer";
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";
import {bindActionCreators} from "redux";

import * as basketActions from '../redux/actions/basket'
import * as productsAction from '../redux/actions/products'

import '../App.scss'

import ProductPage from "../components/ProductPage/ProductPage";
import Paginator from "../components/Paginator/Paginator";
import CatalogPage from "../components/CatalogPage/CatalogPage";
import {CategoryType, ItemsType} from "../types/types";


type Props = {
    products: Array<ItemsType>

    catalogs1: Array<CategoryType>
    catalogs2:  Array<CategoryType>

    pageSize: number
    currentPage: number
    totalProductsCount: number

    basket: Array<ItemsType>

    addToBasket: (obj: ItemsType, id: number) => void
    setCurrentPage: (currentPage: number) => void
}


const ProductListContainer: React.FC<Props> = ({catalogs1, catalogs2,
                                                   addToBasket,
                                                   setCurrentPage,
                                                   totalProductsCount, currentPage,
                                                   pageSize,
                                                   products, basket}) => {

    //Сортировка по алфавиту
    let sortProducts = products
    sortProducts.sort((a: ItemsType, b: ItemsType) => a.title.localeCompare(b.title))

    const onPageChanged = (page: number) => setCurrentPage(page)

    let location = useLocation();

    switch (location.pathname) {
        case  '/':
            return <CatalogPage catalogs={catalogs1}/>
        case '/catalog/catalog_1_1':
            return (
                <>
                    <CatalogPage catalogs={catalogs2}/>

                    <Paginator totalProductsCount={totalProductsCount}
                               pageSize={pageSize}
                               currentPage={currentPage}
                               onPageChanged={onPageChanged}/>

                    <ProductPage products={sortProducts}
                                 currentPage={currentPage}
                                 addToBasket={addToBasket}
                                 basket={basket}/>
                </>
            );
        case '/catalog/catalog_2_1':
            return (
                <>
                    <Paginator totalProductsCount={totalProductsCount}
                               pageSize={pageSize}
                               currentPage={currentPage}
                               onPageChanged={onPageChanged}/>

                    <ProductPage products={sortProducts}
                                 currentPage={currentPage}
                                 addToBasket={addToBasket}
                                 basket={basket}/>
                </>
            );

        default:
            return null
    }
};

const mapStateToProps = (state: AppStateType) => ({
    products: state.products.items,

    catalogs1: state.catalogs.category1,
    catalogs2: state.catalogs.category2,

    pageSize: state.products.pageSize,
    currentPage: state.products.currentPage,
    totalProductsCount: state.products.items.length,

    basket: state.basket.items

})

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(basketActions, dispatch),
    ...bindActionCreators(productsAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)

