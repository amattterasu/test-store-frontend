import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {AppStateType} from "../redux/reducers/rootReducer";
import * as basketActions from "../redux/actions/basket";

import Header from "../components/Header/Header";

type Props = {
    totalCount: number
    totalPrice: number
}

const HeaderContainer: React.FC<Props> = (props) => {
    return (
        <div>
            <Header {...props}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    totalCount: state.basket.totalCount,
    totalPrice: state.basket.totalPrice
})

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(basketActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)