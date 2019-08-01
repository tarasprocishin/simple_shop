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
      number: null
    }
  }

  addToBasket = (el) => {
    this.setState(prevState => {
      let { basket, number } = prevState;
 
      if( basket.indexOf(el) === -1 ){
        el.number = 1;
        let newBasket =  basket.concat(el);
        return{
          basket: newBasket,
          number: el.number
         }
      
      }else{
        el.number++;
        return{
          number: el.number
        }
      }
      



    
  

    })
  }


  render(){
      let { basket } = this.state;
      console.log(basket);
    return (
      <div className="App">
        <ProductList data={data}  addToBasket = {this.addToBasket} />
        <Basket data={data} basket={basket} />
      </div>
    );
  }

}

export default App;
