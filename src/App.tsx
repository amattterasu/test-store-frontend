import React from 'react'
import {BrowserRouter, Route, Switch, RouteProps} from "react-router-dom";
import {connect} from "react-redux";

import './App.scss'
import Header from "./redux/components/Header/Header";
import ProductCard from "./redux/components/ProductCard/ProductCard";

const App: React.FC = (props) => {
    const {product}: any = props
    return (
        <div className='app-wrapper'>
            <Header />



            <section className='products'>

            </section>

           <BrowserRouter>
               <Switch>

               </Switch>
           </BrowserRouter>
            {product}
        </div>
    )
}

const mapStateToProps = ({product}: any) => ({
    product: product.price
})

export default connect(mapStateToProps, null)(App);
