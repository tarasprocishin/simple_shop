import React from 'react';
import data from './server/data';
import Basket from './Components/Basket';
import ProductList from './Components/ProductList';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      basket: [],
      number: null,
      toggle: true
    }
  }

  addToBasket = (el) => {
    this.setState(prevState => {

      let { basket } = prevState; 

      if( basket.indexOf(el) === -1 ){
        el.number = 1;
        let newBasket =  basket.concat(el);
        return {
          basket: newBasket,
          number: el.number
          }    
      }else{
        el.number++;
        return { number: el.number };
      }
    })
  }

  removeFromBasket  = (el) => {
    this.setState(prevState => {
      let { basket } = prevState; 
      if( basket.indexOf(el) === -1 ){
        return;
      }

      if(el.number > 1 ){
        el.number--;
        return { number: el.number };
      }

       basket.splice(basket.indexOf(el), 1);
      return {
        basket: basket
      } 
    })
  }

  goToBasket = () => {
    this.setState(prevState => (
       {toggle: !prevState.toggle} 
    ))
}

  render(){
      let { basket, toggle } = this.state;
    return (
      <div className="App">
        {toggle 
        ? <ProductList 
            data={data} 
            addToBasket={this.addToBasket}
            removeFromBasket={this.removeFromBasket} 
         />
         : null }
     
        <Basket 
          data={data}
          basket={basket}
          toggle={toggle}
          goToBasket={this.goToBasket}
          removeFromBasket={this.removeFromBasket}
        />
      </div>
    );
  }

}

export default App;
