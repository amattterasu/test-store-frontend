import React from 'react';
import {NavLink} from "react-router-dom";

import CatalogCard from "../CatalogCard/CatalogCard";
import {CategoryType} from "../../types/types";

type Props = {
    catalogs: Array<CategoryType>
}

const CatalogPage = ({catalogs}: Props) => {

    return (
        <div className='catalogs'>
            {
                catalogs.map((catalog: CategoryType, i: number) => {
                    return <NavLink key={i} className='catalog'
                                    to={`/catalog/${catalog.url}`}><CatalogCard {...catalog}/>
                    </NavLink>
                })
            }
        </div>
    );
};

export default CatalogPage;