import React from 'react';
import './CatalogCategory.scss'

const CatalogCategory: React.FC = (props) => {
    const {title, image}: any = props
    return (
        <>
            <div className='catalogImage'>
                <img src={image} alt={'image1'}/>
            </div>
            <div className='catalogInfo'>
                <h1>{title}</h1>
            </div>
        </>
    );
};

export default CatalogCategory;