import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Product extends Component {
   


getClasess = ()=>{

   const clasess = this.props.Product.count===0 ? 
   "badge badge-primary m-2"
    : "badge badge-warning m-2" ;
    return clasess

     }

    render() { 

    // const clasess = this.state.count===0 ? "badge badge-primary m-2" : "badge badge-warning m-2" ;
    let{Product,increament,onDelete}=this.props ;
        let{name,count,id}=this.props.Product;

        return ( 
        
            <div className="row">
                <div className="col-1">
                <span style={{color:"red",fontSize:30 , cursor:'pointer'}}>
                <Link to = {`product/${id}/${name}`}> {name} </Link> 
                </span>
                </div>
                <div className="col-10">
                <span className={ this.getClasess()}>{count}</span>
                <button onClick={()=>increament(Product)} className="btn btn-primary ">+</button>
                <span style={{ cursor: "pointer" }} onClick={()=>onDelete(Product)}>
                    <i className="fas fa-trash m-2"></i>
                </span>
                </div>
            </div>
            
         );
    }
}
 
export default Product;