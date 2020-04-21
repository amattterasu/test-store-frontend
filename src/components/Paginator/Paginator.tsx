import React from 'react';

type Props = {
    totalProductsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator = ({totalProductsCount, pageSize, currentPage, onPageChanged}: Props) => {

    let pagesCount = Math.ceil(totalProductsCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className='paginator'>
            {pages.map(p => {
                return <span key={p} className={currentPage === p ? 'selectedPage' : ''}
                             onClick={() => onPageChanged(p)}>{p}</span>
            })}
        </div>
    );
};

export default Paginator;