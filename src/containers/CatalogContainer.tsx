import React, {Component} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import CatalogCategory from "../components/CatalogCatagory/CatalogCategory";
import {AppStateType} from "../redux/reducers/rootReducer";

class CatalogContainer extends Component<any, any> {

    render(): React.ReactNode {
        return <div className='catalogs'>
            {
                this.props.catalogs1.map((catalog: any) => {
                    return <NavLink className='catalog'
                                    to={`/catalog/${catalog.url}`}><CatalogCategory {...catalog}/>
                    </NavLink>
                })
            }
        </div>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    catalogs1: state.catalogs.category1,
    catalogs2: state.catalogs.category2,
})

export default connect(mapStateToProps, null)(CatalogContainer)