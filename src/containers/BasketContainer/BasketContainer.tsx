import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {NavLink} from "react-router-dom";

import './BasketContainer.scss'

import {AppStateType} from "../../redux/reducers/rootReducer";
import * as productActions from "../../redux/actions/products";
import * as basketActions from "../../redux/actions/basket";

import BasketCard from "../../components/ProductCard/BasketCard";
import {ItemsType} from "../../types/types";

type Props = {
    totalCount: number
    totalPrice: number
    products: Array<ItemsType>
    count: any

    removeFromBasket: (obj: ItemsType, id: number, sameTypePrice: number, count: number) => void
    quantityUp: (obj: ItemsType, id: number) => void
    quantityDown: (obj: ItemsType, id: number) => void
}

type CountType = { id: number, count: number }


const BasketContainer = (props: Props) => {

    const {products, totalCount, totalPrice, count, removeFromBasket, quantityUp, quantityDown} = props

    // Фильтрация
    let temp: Array<CountType> = []

    count.forEach((item: CountType) =>
        item.count !== 0 ? temp.push({id: item.id, count: item.count}) : null
    )
    const ids = temp.filter((item: CountType) => item.id !== undefined)

    return (
        <div className='basket products'>
            <h1>Корзина</h1>
            <div className='totalConfirm'>
                <div className='totalPrice'>
                    Итоговая цена: &nbsp;
                    {
                        totalPrice
                    }
                </div>
                <div className='totalCount'>
                    Итоговое количество: &nbsp;
                    {
                        totalCount
                    }
                </div>
                <div className='confirm-btn productDelete-btn'>
                    <NavLink to='/order'> <button >
                       Оформить заказ
                    </button></NavLink>
                </div>
            </div>
            <div className='basketContainer'>
                <div className='product'>
                    {
                        products.map((product: ItemsType) =>
                            ids.map((item: CountType, index: number) => (
                                item.id === product.id
                                    ?
                                    <BasketCard key={index}
                                                {...product}
                                                count={item.count}
                                                removeFromBasket={removeFromBasket}
                                                quantityUp={quantityUp}
                                                quantityDown={quantityDown}
                                    />
                                    : null
                            ))
                        )
                    }
                </div>

            </div>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    totalCount: state.basket.totalCount,
    totalPrice: state.basket.totalPrice,
    products: state.products.items,
    count: state.basket.quantity
})

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(productActions, dispatch),
    ...bindActionCreators(basketActions, dispatch),

})

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);