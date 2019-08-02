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
        let { basket, toggle, goToBasket } = this.props;
        
      
         return(
             <div className ="basket">
                <BasketIcon 
                    basket = {basket} 
                    toggle={toggle} 
                 />
                <BasketMain 
                    basket = {basket}
                    toggle = {toggle}
                    goToBasket = {goToBasket}
                 />

             </div>
        )}
   
}

export default Basket;