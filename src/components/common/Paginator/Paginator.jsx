import React from 'react';
import d from './Paginator.module.css';

let Paginator = ({ currentPage, setUsersTotalCount, pageSize, onPageChanged }) => {

    let pagesCount = Math.ceil(setUsersTotalCount / pageSize);

    let pages = [];
    for (let i = 1; i <= 4; i++) {
        pages.push(i);
    }

    return (
        <section>
            {
                pages.map(page => <span key={page} className={currentPage === page && d.selected} onClick={() => onPageChanged(page)}>{page}</span>)
            }
        </section>
    )
}

export default Paginator;