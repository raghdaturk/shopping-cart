import React, { Component } from 'react';
import Product from './product';
class ShoppingCart extends Component {
    

     




    render() { 


      console.log(this.props)


        let{increament,onDelete,products,reset}=this.props
        return (
            <>
            <h1>Shopping Cart</h1>
            <button onClick={reset} className="btn btn-secondary btn-sm m-2 ">Reset</button>
            {
              products.map((p)=><Product key={p.id} Product={p}  
                increament={increament}  
                onDelete={onDelete}  />


                )

            }
            </>
          );
    }
}
 
export default ShoppingCart;