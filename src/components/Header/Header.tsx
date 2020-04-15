import React from 'react';

import './Header.scss'

const Header: React.FC = () => {
    return (
        <header>
            <div className='headerContainer'>
                <h1>Название магазина</h1>
            </div>
            <div className='headerContainer'>
                <div className='headerItem'>
                    Итог <b>0</b>
                </div>
                <div className='headerItem'>
                    Корзина <b>0</b>
                </div>
            </div>
        </header>
    );
};

export default Header;