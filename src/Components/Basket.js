import React from 'react';

class Basket extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: false
        }

    }
    render() {
        let {data, basket} = this.props;
    
        // console.timeLog(basket)
         return(
             <div className ="basket">
                 <h1>{basket.length}</h1>  
             </div>
        )}
   
}

export default Basket;