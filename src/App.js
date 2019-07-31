import React from 'react';
import data from './server/data';
import Basket from './Components/Basket';
import ProductList from './Components/ProductList';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      basketCount: null,
    }
  }

  addToBasket = () => {
    let count = 1;
    this.setState( {
      // let count = prevStae.basketCount + 1;
     
        basketCount: count
      
    })
  }


  render(){
      let { basketCount } = this.state;

    return (
      <div className="App">
        <Basket data={data} basketCount={basketCount} />
        <ProductList data={data}  addToBasket = {this.addToBasket} />

      </div>
    );
  }

}

export default App;
