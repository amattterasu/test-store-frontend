import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.scss'

import ProductListContainer from './containers/ProductListContainer'
import HeaderContainer from './containers/HeaderContainer'
import BasketContainer from './containers/BasketContainer'
import OrderContainer from './containers/OrderContainer/OrderContainer'

const App: React.FC = () => {
    return (
        <div className='app-wrapper'>
            <BrowserRouter >
                <HeaderContainer/>
                <Switch>
                    <Route exact path={['/', '/catalog/', '/catalog/:catalogId']} render={() => <ProductListContainer />}/>
                    <Route path='/basket' render={() => <BasketContainer />}/>
                    <Route path='/order' render={() => <OrderContainer />}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
