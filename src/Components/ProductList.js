import React from 'react';

function ProductList(props) {
    let { data, addToBasket } = props;
       
    return(
        <ul>
            {data.map(el => (
            <li key ={el.id} className="product">
            <h3 className="product__name">{el.name}</h3>
            <p className="product__lable">{el.label}</p>
            <p className="product__price">{el.price}</p>
            <button onClick={()=> {addToBasket(el)}}>Add</button>
            </li>
           ))}
        </ul>

    )
}

export default ProductList;