import React from 'react';

function BasketIcon (props) {
    let { basket, toggle } = props;
    return (
        <>
        { toggle ? 
            <div className="basket__icon">
                <h1>
                    {basket.reduce((sum, el) => {
                        return sum + el.number;
                    }, 0 )}
                </h1> 
            </div>
        : null
        }
 
        </>

    )
}

export default BasketIcon;