import React from 'react';
import ProductCard from "../ProductCard/ProductCard";

import {ItemsType} from "../../types/types";

type Props = {
    products: Array<ItemsType>
    currentPage: number
    addToBasket: (product: ItemsType, id: number) => void
    basket:  Array<ItemsType>
}

const ProductPage: React.FC<Props> = ({products, currentPage, addToBasket, basket}) => {

    return (
        <div className='products'>
            {
                products.map((product: any, i: number) => (
                        product.pageNumber === currentPage &&
                        <ProductCard key={i} {...product} addToBasket={addToBasket} basket={basket}/>
                    )
                )
            }
        </div>
    );
};

export default ProductPage;