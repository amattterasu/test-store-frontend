import React from 'react';
import './ProductCard.scss'
import {ItemsType} from "../../types/types";

type Props = {
    title: string
    price: number
    image: string
    addToBasket: (product: ItemsType, id: number) => void
    isBasket?: boolean
    basket: Array<ItemsType>
    id: number
    count: number
}

const ProductCard: React.FC<Props> = (product) => {
    const {title, price, image, addToBasket, isBasket, basket, id, count}: Props = product

    let addedCount: number = basket.reduce((count: number, productBasket: ItemsType) => count + (productBasket.id === id ? 1 : 0), 0)
    return (
        <div className='productCard'>
            <div className='productImage'>
                <img
                    src={image} alt={'image_product'}/>
            </div>
            <div className='productInfo'>
                <h3>{title}</h3>
                <p className='price'><span className='rub'>P</span> {price} </p>
            </div>
            {
                !isBasket &&
                <div className='product-btn'>
                    <button onClick={() => addToBasket(product, id)}>
                        Добавить в корзину  {addedCount > 0 && `(${addedCount})`}
                    </button>
                </div>
            }
            {
                count
            }
        </div>
    );
};

export default ProductCard;