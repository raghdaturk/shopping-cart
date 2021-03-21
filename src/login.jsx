import Joi from 'joi';
import React, { Component } from 'react';


class Login extends Component {


    state = { 

        email: "",
        password: "" ,
        errors:{},

     }




     validationLoginForm=()=>{
        let state={...this.state};
        delete state.errors;
        const schema = Joi.object({
            password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,10}$')),

            email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    
        })

        return schema.validate(state,{abortEarly:false})

    }


     


     handleChange=(e)=>{

        let state={...this.state};
        state[e.target.name]=e.target.value;
        this.setState(state);
     }


     submitLoginForm=(e)=>{

        let errors={...this.state.errors}

        e.preventDefault();

        let validation=this.validationLoginForm()
        console.log(validation)

   if(validation.error){

    for(let error of validation.error.details ){

        errors[error.path]=error.message 

    }

    this.setState({errors})
    console.log(errors)

        }else{


          this.props.history.replace('/Menu')
        
        
               
        }
     }




    render() { 

        return (
        <>
        <h1>Login</h1>

        <form onSubmit={this.submitLoginForm}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input onChange={this.handleChange}type="email" className="form-control" id="email" name="email" value={this.state.email} />
    {this.state.errors.email &&<div className="alert alert-danger">{this.state.errors.email}</div>}
  </div>

  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input onChange={this.handleChange} type="password" className="form-control" id="password" name="password" value={this.state.password} />
   {this.state.errors.password && <div className="alert alert-danger">{this.state.errors.password}</div> }
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </>  );
    }
}
 
export default Login;