import React from 'react';

class Basket extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: false
        }
    }
    goToBasket = (el) => {
        this.setState(prevState => (
           {toggle: !prevState.toggle} 
        ))
    }

  
    render() {
        let {data, basket} = this.props;
    
        // console.timeLog(basket)
         return(
             <div className ="basket">
                 <div className="basket__icon">
                 <button onClick={this.goToBasket}> go to basket</button>
                 <h1>
                 {basket.reduce((sum, el) => {
                     return sum + el.number;
                 }, 0 )}
                 </h1> 
                 </div>
                 {this.state.toggle ? <p>Hello world!</p>: null}
 
             </div>
        )}
   
}

export default Basket;