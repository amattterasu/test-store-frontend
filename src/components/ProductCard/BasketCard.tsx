import React from 'react';
import {ItemsType} from "../../types/types";

type Props = {
    title: string
    price: number
    image: string
    id: number
    count: number
    removeFromBasket: (obj: ItemsType, id: number, sameTypePrice: number, count: number) => void
    quantityUp: (obj: ItemsType, id: number) => void
    quantityDown: (obj: ItemsType, id: number) => void
    isOrder?: boolean
}

const BasketCard = (product: Props) => {

    const {title, price, image, count, id, removeFromBasket, quantityDown, quantityUp, isOrder}: any = product

    const sameTypePrice = price * count
    return (
        <div className='productCard'>
            {!isOrder &&
            <div className='productImage'>
                <img
                    src={image} alt={'image_product'}/>
            </div>}
            <div className='productInfo'>
                <h3>{title}</h3>
            </div>
            {!isOrder &&
            <button onClick={() => removeFromBasket(product, id, sameTypePrice, count)}>
                Удалить
            </button>
            }

            {
                count
            }
            <br/>
            {
                sameTypePrice
            }
            {!isOrder &&
            <div>
                <button onClick={() => quantityUp(product, id)}>
                    +
                </button>
                <button onClick={() => quantityDown(product, id)}>
                    -
                </button>
            </div>
            }
        </div>
    );
};

export default BasketCard;