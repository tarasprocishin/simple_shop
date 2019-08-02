import React from 'react';

function BasketMain (props) {
    return (
        <>
            <button onClick={() => {this.goToBasket()}}> go to basket</button>
            {this.state.toggle ? <p>Hello world!</p>: null}
        </>

    )
}

export default BasketMain;