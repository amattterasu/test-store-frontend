import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.scss'

type Props = {
    totalPrice: number
    totalCount: number
}

const Header: React.FC<Props> = ({totalPrice, totalCount}) => {

    return (
        <header>
            <div className='headerContainer'>
               <div className='headerContainerItem'>
                   <h1><NavLink to='/'>Название магазина</NavLink></h1>
               </div>
            </div>
            <div className='headerContainer'>
               <div className='headerContainerItem'>
                   <div className='headerItem'>
                       Итог <b>{totalPrice}</b>
                   </div>
                   <div className='headerItem'>
                       <NavLink to='/basket'>Корзина <b>{totalCount}</b></NavLink>
                   </div>
               </div>
            </div>
        </header>
    );
};

export default Header;