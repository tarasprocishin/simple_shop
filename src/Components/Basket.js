import React from 'react';
import BasketMain from './Basket/BasketMain';
import BasketIcon from './Basket/BasketIcon';

class Basket extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render() {
        let { basket, toggle, goToBasket, removeFromBasket, number } = this.props;
        
      
         return(
             <div className ="basket">
                <BasketIcon 
                    basket={basket} 
                    toggle={toggle} 
                    goToBasket={goToBasket}
                 />
                <BasketMain 
                    basket={basket}
                    number={number}
                    toggle={toggle}
                    goToBasket={goToBasket}
                    removeFromBasket={removeFromBasket}
                 />

             </div>
        )}
   
}

export default Basket;