import React, { Component } from 'react';
class Admin extends Component {
    state = {  }







    render() { 


        return ( 
        <>
        <h1>Admin</h1>
        <button onClick={()=>this.props.history.push("/productForm/new")} className="btn btn-primary m-3">Add</button>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>

  <tbody>

    {
        this.props.product.map((p)=>(

            <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>
            <i onClick={()=>this.props.history.push(`/productForm/${p.id}`)}

                
                className="far fa-edit" style={{cursor:"pointer"}}>

                </i>
            </td>

            <td>

            <i onClick={()=>this.props.deleteHandeler(p.id)}
                className="fas fa-trash" style={{cursor:"pointer"}}></i>
        
            </td>
            </tr>



        )
    
        )


    }
      
  </tbody>
  
</table>


        </> );
    }
}
 
export default Admin;