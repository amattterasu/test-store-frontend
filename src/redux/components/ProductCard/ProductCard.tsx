import React from 'react';
import './ProductCard.scss'

const ProductCard: React.FC = () => {
    return (
        <div className='productCard'>
            <div className='productImage'>
                <img
                    src='https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg'/>
            </div>
            <div className='productInfo'>
                <h3>Название товара</h3>
                <p className='price'>2999</p>
            </div>
            <button>Добавить в корзину (0)</button>
        </div>
    );
};

export default ProductCard;