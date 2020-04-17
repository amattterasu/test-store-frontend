import React from 'react';
import Header from "../components/Header/Header";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reducers/rootReducer";
import {bindActionCreators} from "redux";
import * as basketActions from "../redux/actions/basket";

const HeaderContainer = (props: any) => {
    return (
        <div>
            <Header {...props}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    totalPrice: state.basket.items.reduce((total: any, product: any) => total + product.price, 0),
    count: state.basket.items.length

})

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(basketActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)