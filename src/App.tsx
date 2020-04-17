import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import './App.scss'

import CatalogContainer from "./containers/CatalogContainer";
import ProductListContainer from "./containers/ProductListContainer";
import HeaderContainer from "./containers/HeaderContainer";

const App: React.FC = (props) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>

            <BrowserRouter >
                <Switch>
                    <Route exact path={['/', '/catalog/']} render={() => <CatalogContainer />}/>
                    <Route path='/catalog/:catalogId' render={() => <ProductListContainer />}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = ({product}: any) => ({
})

export default connect(mapStateToProps, null)(App);
