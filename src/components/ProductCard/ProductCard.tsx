import React from 'react';
import './ProductCard.scss'

const ProductCard: React.FC = (props) => {
    const {title, price, image}: any = props

    return (
        <div className='productCard'>
            <div className='productImage'>
                <img
                    src={image}/>
            </div>
            <div className='productInfo'>
                <h3>{title}</h3>
                <p className='price'>{price}</p>
            </div>
            <button>Добавить в корзину (0)</button>
        </div>
    );
};

export default ProductCard;