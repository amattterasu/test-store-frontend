import React from 'react';
import './ProductCard.scss'

const ProductCard: React.FC = (product) => {
    const {title, price, image, addToBasket}: any = product
    return (
        <div className='productCard'>
            <div className='productImage'>
                <img
                    src={image} alt={'image_product'}/>
            </div>
            <div className='productInfo'>
                <h3>{title}</h3>
                <p className='price'>{price}</p>
            </div>
            <button onClick={() => addToBasket(product)}>
                Добавить в корзину
            </button>

        </div>
    );
};

export default ProductCard;