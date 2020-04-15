import React, {useState} from 'react';
import {AppStateType} from "../redux/reducers/rootReducer";
import {connect} from "react-redux";

import {useLocation} from 'react-router-dom'

import ProductCard from "../components/ProductCard/ProductCard";
import CatalogCategory from "../components/CatalogCatagory/CatalogCategory";
import {NavLink} from "react-router-dom";

const ProductListContainer = (props: any) => {

    let location = useLocation();

    switch (location.pathname) {
        case '/catalog/catalog_1_1':
            return (
                <>
                    <div className='products'>
                        {
                            props.products1.map((product: any) => (
                                    <ProductCard {...product}/>
                                )
                            )
                        }
                    </div>
                    <div className='catalogs'>
                        {
                           props.catalogs2.map((catalog: any) => {
                                return <NavLink className='catalog'
                                                to={`/catalog/${catalog.url}`}><CatalogCategory {...catalog}/>
                                </NavLink>
                            })
                        }
                    </div>
                </>


            );
        case '/catalog/catalog_1_2':
            return (
                <div className='products'>
                    {
                        props.products2.map((product: any) => (
                                <ProductCard {...product}/>
                            )
                        )
                    }
                </div>
            );
        case '/catalog/catalog_2_1':
            return (
                <div className='products'>
                    {
                        props.products3.map((product: any) => (
                                <ProductCard {...product}/>
                            )
                        )
                    }
                </div>

            );
        default:
            return (
                <div className='products'>

                </div>
            );
    }
};

const mapStateToProps = (state: AppStateType) => ({
    products1: state.products.category1,
    products2: state.products.category2,
    products3: state.products.category3,
    catalogs2: state.catalogs.category2
})

export default connect(mapStateToProps, null)(ProductListContainer)

