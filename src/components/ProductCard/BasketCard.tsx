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
                <div className='productDelete-btn'>
                    <button onClick={() => removeFromBasket(product, id, sameTypePrice, count)}>
                        Удалить
                    </button>
                </div>
            }

           <div className='productCountPrice'>
               <div className='productPrice'>
                   &#8381; &nbsp;
                   {
                       sameTypePrice
                   }
               </div>
               <div className='productCount'>
                   Штук: &nbsp;
                   {
                       count
                   }
               </div>
           </div>
            {!isOrder &&
            <div className='basket-btn'>
                <button onClick={() => quantityUp(product, id)}>
                   <span> + </span>
                </button>
                <button onClick={() => quantityDown(product, id)}>
                    <span> - </span>
                </button>
            </div>
            }
        </div>
    );
};

export default BasketCard;