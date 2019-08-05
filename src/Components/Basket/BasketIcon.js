import React from 'react';

function BasketIcon (props) {
    let { basket, toggle, goToBasket} = props;
    return (
       <>
               {toggle ?   <button onClick={() => {goToBasket()}}  className="basket__icon">
                  <div className="icon-basket">
                              <span className="counter"> 
                                  {basket.reduce((sum, el) => {
                                        return sum + el.number;
                                     }, 0 )}
                                 </span>
                              </div> 
                            
                 
                     </button>: null   }

          </>

        
 


    )
}

export default BasketIcon;