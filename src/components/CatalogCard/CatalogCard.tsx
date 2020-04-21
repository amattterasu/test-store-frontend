import React from 'react';
import './CatalogCard.scss'

type Props = {
    title: string
    image: string
}

const CatalogCard: React.FC<Props> = ({title, image}) => {
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

export default CatalogCard;