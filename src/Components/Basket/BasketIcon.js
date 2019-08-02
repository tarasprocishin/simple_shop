import React from 'react';

function BasketIcon (props) {
    let { basket } = props;
    return (
        <>
            <div className="basket__icon">
                <h1>
                {basket.reduce((sum, el) => {
                 return sum + el.number;
             }, 0 )}
             </h1> 
            </div>
        </>

    )
}

export default BasketIcon;