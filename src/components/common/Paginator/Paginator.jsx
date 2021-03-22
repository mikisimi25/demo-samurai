import React from 'react';
import d from './Paginator.module.css';
import cn from 'classnames';

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged,portionSize= 10 }) => {
    return ('2')
    // let pagesCount = Math.ceil(totalItemsCount / pageSize);

    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }

    // let portionCount = Math.ceil(pagesCount / portionSize);
    // let [portionNumber, setPortionNumber] = useState(1);
    // let leftPortionPageNumber = (portionNumber -1 ) * portionSize + 1;
    // let rightPortionPageNumber = portionNumber * portionSize;

    // return (
    //     <section>
    //         {portionNumber > 1 && 
    //         <button onClick={() => {setPortionNumber(portionNumber - 1) }}>PREV</button> }

    //         {pages
    //             .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber).map((p) => {
    //                 return <span className={ cn({
    //                     [d.selectPage]: currentPage === p
    //                 }, d.pageNumber) }
    //                     key={p}
    //                     onClick={(e) => {
    //                         onPageChanged(p);
    //                     }}>{p}</span>
    //         })}

    //         { portionCount > portionNumber && 
    //         <button onClick={() => {setPortionNumber(portionNumber + 1)}} >NEXT</button> }
    //     </section>
    // )
}

export default Paginator;