import axios from 'axios';
import React, { Component } from 'react';

class ProductForm extends Component {
    state = { 
        name:"" ,
        price:"" 
     }

handleChange=(e)=>
{

    let state={...this.state};
    state[e.currentTarget.name]=e.currentTarget.value;
    this.setState(state);

}



handleSubmit=async(e)=>{
e.preventDefault()

if(this.props.match.params.id=="new"){

let state={...this.state,isInCart: false ,count:0}

await axios.post("https://iti-react-cource.herokuapp.com/products",state)

}else{

    let state={...this.state,isInCart: false ,count:0}

  await axios.put(`https://iti-react-cource.herokuapp.com/products/${this.props.match.params.id}`,state)
}
this.props.history.replace("/admin")

}


async componentDidMount(){

    let id= this.props.match.params.id

    if(id!=="new"){
     let {data} =  await axios.get(`https://iti-react-cource.herokuapp.com/products/${id}`)
     let state={...this.state}
     state.price=data.price
     state.name=data.name
     this.setState(state)
    }


}


up











    render() { 
        return ( <>
      <h1>
          
          
    {this.props.match.params.id==="new" ? "Add Product" : "Edit Product" }

      </h1>
        <form onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input onChange={this.handleChange} type="text" className="form-control" id="Name" name="name" value={this.state.name} />
  </div>
  <div className="form-group">
    <label htmlFor="Price">Price</label>
    <input onChange={this.handleChange} type="text" className="form-control" id="Price"  name="price" value={this.state.price}/>
  </div>
  <button  type="submit" className="btn btn-primary">
      
  {this.props.match.params.id==="new" ? "Add" : "Edit " }
</button>
</form>
        </> );
    }
}
 
export default ProductForm;