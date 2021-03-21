import React, { Component } from 'react';
class Details extends Component {
    state = { 


     }


     handleSave=()=>{
         this.props.history.replace("/cart")
     }

    render() { 

       

        let product = this. props.product.filter((p)=>p.id===parseInt(this.props.match.params.id))[0]
    console.log(product)


    return (  

     <>
    <h1> Details No.{product.id} </h1>
    <h2>  {product.name}  </h2>
    <h2> count in shopping cart:{product.count}  </h2>
    <button onClick={this.handleSave} className="btn btn-primary btn-sm">Save</button>
    </>

        );
    }
}
 
export default Details ;
