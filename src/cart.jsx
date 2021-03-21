import React, { Component } from 'react';
const Car = (props) => {


    let styles = !props.product.isInCart 
     ? {color:"gray" , cursor:"pointer"} 
     : {cursor:"pointer" } ;

    return ( 
        <>
        <i onClick={()=>props.handlecar(props.product)}

        style={styles}
    
        className="fas fa-cart-plus">

        </i>
        </>
    
    
        );
}
 
export default Car;