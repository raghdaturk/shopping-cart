import React, { Component } from 'react';
import Car from './cart';


class Menu extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th></th>
    </tr>
  </thead>
  <tbody>

      {
          this.props.product.map((p)=>{return (
              <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>
                      <Car product={p} handlecar={this.props.handlecar} />

                </td>
              </tr>
          )})
      }
  </tbody>
</table>
            </>
         );
    }
}
 
export default Menu;