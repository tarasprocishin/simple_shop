import React from 'react';

function BasketMain (props) {
    let { goToBasket, toggle, basket } = props;

    return (
        <>
        <button onClick={() => {goToBasket()}}>{toggle ? "go to basket" : "return" } </button>
         {toggle
            ? null
            : 
            basket.map(el => (
                <li key ={el.id} className="product">
                    <h3 className="product__name">{el.name}</h3>
                    <p className="product__price">{el.price}</p>
                    <p className="product__price">{el.number}</p>
                    <p className="sum_price">
                        Загальна сума <br/>
                    {basket.reduce((sum, el) => {
                        return sum + (el.price * el.number);
                    }, 0 )}
                    </p>
                </li>
            ))

          

                }</>

    )
}

export default BasketMain;