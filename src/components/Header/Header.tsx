import React from 'react';

import './Header.scss'

const Header: React.FC = (props: any) => {

    const {totalPrice, count} = props

    return (
        <header>
            <div className='headerContainer'>
                <h1>Название магазина</h1>
            </div>
            <div className='headerContainer'>
                <div className='headerItem'>
                    Итог <b>{totalPrice}</b>
                </div>
                <div className='headerItem'>
                    Корзина <b>{count}</b>
                </div>
            </div>
        </header>
    );
};

export default Header;