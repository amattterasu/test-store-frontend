import React, {Component} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import {AppStateType} from "../redux/reducers/rootReducer";
import CatalogCategory from "../components/CatalogCatagory/CatalogCategory";

class CatalogContainer extends Component<any, any> {

    render(): React.ReactNode {
        return <div className='catalogs'>
            {
                this.props.catalogs1.map((catalog: any, i: number) => {
                    return <NavLink key={i} className='catalog'
                                    to={`/catalog/${catalog.url}`}>
                          <CatalogCategory key={i} {...catalog}/>
                    </NavLink>
                })
            }
        </div>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    catalogs1: state.catalogs.category1
})

export default connect(mapStateToProps, null)(CatalogContainer)