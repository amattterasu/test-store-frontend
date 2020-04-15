import React from 'react'
import {BrowserRouter, Route, Switch, RouteProps} from "react-router-dom";
import {connect} from "react-redux";

import './App.scss'
import Header from "./components/Header/Header";
import CatalogContainer from "./containers/CatalogContainer";
import ProductListContainer from "./containers/ProductListContainer";

const App: React.FC = (props) => {

    const {product}: any = props
    return (
        <div className='app-wrapper'>
            <Header/>

            <BrowserRouter>
                <Switch>
                    <Route exact path={['/', '/catalog/']} render={() => <CatalogContainer />}/>
                    <Route path='/catalog/:catalogId' render={() => <ProductListContainer />}/>
                </Switch>
            </BrowserRouter>
            {product}
        </div>
    )
}

const mapStateToProps = ({product}: any) => ({
})

export default connect(mapStateToProps, null)(App);
