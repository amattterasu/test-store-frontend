import React from 'react';
import {AppStateType} from "../redux/reducers/rootReducer";
import {connect} from "react-redux";
import {NavLink, useLocation} from "react-router-dom";
import {bindActionCreators} from "redux";

import * as basketActions from '../redux/actions/basket'
import * as productsAction from '../redux/actions/products'

import '../App.scss'

import ProductCard from "../components/ProductCard/ProductCard";
import CatalogCategory from "../components/CatalogCatagory/CatalogCategory";

const ProductListContainer = (props: any) => {

    //Сортировка по алфавиту
    let sortProducts = props.products
    sortProducts.sort((a: any, b: any) => a.title.localeCompare(b.title))

    let location = useLocation();

    const {addToBasket, setCurrentPage, totalProductsCount, currentPage, pageSize} = props

    let pagesCount = Math.ceil(totalProductsCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageChange = (page: number) => {
        setCurrentPage(page)
    }

    switch (location.pathname) {
        case '/catalog/catalog_1_1':
            return (
                <>
                    <div className='catalogs'>
                        {
                            props.catalogs2.map((catalog: any, i: number) => {
                                return <NavLink key={i} className='catalog'
                                                to={`/catalog/${catalog.url}`}><CatalogCategory {...catalog}/>
                                </NavLink>
                            })
                        }
                    </div>
                    <div className='paginator'>
                        {pages.map(p => {

                            return <span key={p} className={currentPage === p ? 'selectedPage' : ''}
                                         onClick={() => onPageChange(p)}>{p}</span>
                        })}

                    </div>
                    <div className='products'>
                        {
                            props.products.map((product: any, i: number) => (
                                    product.pageNumber === currentPage &&
                                    <ProductCard key={i} {...product} addToBasket={addToBasket}/>
                                )
                            )
                        }
                    </div>
                </>
            );
        case '/catalog/catalog_2_1':
            return (
                <>
                    <div className='products'>
                        {
                            props.products.map((product: any, i: number) => (
                                    product.pageNumber === currentPage &&
                                    <ProductCard key={i} {...product} addToBasket={addToBasket}/>
                                )
                            )
                        }
                    </div>
                </>
            );

        default:
            return null
    }
};

const mapStateToProps = (state: AppStateType) => ({
    products: state.products.items,
    catalogs2: state.catalogs.category2,
    pageSize: state.products.pageSize,
    currentPage: state.products.currentPage,
    totalProductsCount: state.products.items.length

})

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(basketActions, dispatch),
    ...bindActionCreators(productsAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)

