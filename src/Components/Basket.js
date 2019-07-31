import React from 'react';

function Basket (props){
    let { data, basketCount } = props;
    return(
        <div>
            {basketCount}
        </div>
    )   
}

export default Basket;