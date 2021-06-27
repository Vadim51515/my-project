import React, { useState } from 'react';
import styles from './Paginator.module.css';
type PropsType = {
    totalItemsCount:number
    pageSize:number
    displayedPages:number
    currentPage:number

    onPageChanged:(leftPortionPageNumber:number) => void

}
let Paginator: React.FC<PropsType> = (props) => {
    let portionCount = Math.ceil(props.totalItemsCount / props.pageSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.displayedPages + 1
    let rightPortionPageNumber = portionNumber * props.displayedPages
    let pages:Array<number> = []
    for (let i = 1; i <= portionCount; i++) {
        pages.push(i)
    }
    return (
        <div>

            <div style={{ display: 'flex' }}>
                {leftPortionPageNumber > 1 &&
                    <button style={{marginRight:10}} onClick={(e) => {
                        setPortionNumber(portionNumber - 1)
                        props.onPageChanged(leftPortionPageNumber - props.displayedPages );
                    }}>Назад</button>
                }
                {pages 
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(rez => (
                        <span key={rez}
                            style={{ cursor: "pointer", marginLeft: 10 }}
                            className={`${styles.blef} ${props.currentPage === rez  && styles.selectedPage }`}
                            // className={(props.currentPage === rez) && styles.selectedPage}
                            onClick={(e) => { props.onPageChanged(rez); }}>{rez}</span>

                    ))}
                {portionCount >= portionNumber &&
                    <button style={{marginLeft:10}} onClick={(e) => {
                        setPortionNumber(portionNumber + 1 )
                        props.onPageChanged(rightPortionPageNumber + 1);
                    }}>Вперед</button>
                }
            </div>
        </div>

    )
}
export default Paginator

// import React from 'react';
// import styles from './Paginator.module.css';
// let Paginator = (props) => {
//     debugger
//     let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
//     let pages = []
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i)
//     }
//     return (
//         <div>

//             {pages.map(rez => (
//                 <span 
//                 style={{cursor:"pointer", marginLeft:10}}
//                 className={(props.currentPage === rez) && styles.selectedPage}
//                 onClick={(e)=>{props.onPageChanged(rez);}}>{rez}</span>
//             ))}
//             </div>


//     )
// }
// export default Paginator