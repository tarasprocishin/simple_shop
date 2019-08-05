import React from 'react';

function BasketMain (props) {
    let { goToBasket, toggle, basket, removeFromBasket, number } = props;
    console.log(number)
    return (
        <>
            {toggle ? null :<button onClick={() => {goToBasket()}}> return </button> }
     
            {toggle
                ? null
                : basket.map(el => (
                    <li key ={el.id} className="product">
                        <h3 className="product__name">{el.name}</h3>
                        <p className="product__price">{el.price}</p>
                        <p className="product__price">{el.number}</p>
                        <button onClick={()=> {removeFromBasket(el)}}>Remove</button>
                    </li>
                     ))}

            {toggle
            ? null
            : <p className="sum_price">
                Загальна сума <br/>
                {basket.reduce((sum, el) => {
                    return sum + (el.price * el.number);
                 }, 0 )}
                 <button>Buy</button>
              </p>
            }
            {toggle || basket.length ? null: <h2>Basket is Empty :(</h2>}      
    </>

    )
}

export default BasketMain;