import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import NavBar from './navbar';
import ShoppingCart from './shoppingCart';
import Home from './home';
import About from './about';
import NotFound from '../notFound';
import Details from '../productDetails';
import Menu from './../menu';
import Login from '../login';
import axios from 'axios';
import ProductForm from '../productForm';
import Admin from '../admin';
import { toast, ToastContainer } from 'react-toastify';



const Joi = require('joi');





class App extends Component {
    state = { 
        products:[
            

        ]
     }


     
     incrementHandler=(p)=>{
        let products = [...this.state.products];
        let index = products.indexOf(p);
        products[index].count++;
        this.setState({ products });
    }

    deleteHandeler=async(id)=>{

        let newProducts = [...this.state.products];
       let product = newProducts.filter((x)=>x.id!==id);
        this.setState({products:product});
        try{

            await axios.delete("https://iti-react-cource.herokuapp.com/products/"+id);
        }
        catch(ex){
            toast.error("cant delete")
            this.setState({products:newProducts});

        }

    }
    resetHandeler=()=>{
        let newProducts = [...this.state.products];
         newProducts.map((p)=>
             p.count=0
        );
        this.setState({products:newProducts});

    }

    handleCar=(Product)=>{

        let products = [...this.state.products];
        let index = products.indexOf(Product) ;
        products[index].isInCart = !products[index].isInCart ;
        this.setState({products});



    }

    async componentDidMount(){
        let{data}=await axios.get("https://iti-react-cource.herokuapp.com/products")
        this.setState({products:data})


    }


    render() { 
        return ( <>
     <ToastContainer/>

        <NavBar productsCount={this.state.products.filter((p) => p.isInCart).length} />
        <div className="container">

            <Switch>

                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/product/:id:name?" render={(props)=><Details product={this.state.products} {...props}/>}  />
                <Route path="/notFound" component={NotFound}  />
                <Route path="/login" component={Login}  />
                <Route path="/login" component={Login}  />
                <Route path="/admin" render={(props)=><Admin product={this.state.products} {...props} deleteHandeler={this.deleteHandeler}   />}  />
                <Route path="/productForm/:id" component={ProductForm}/>
                <Route path="/Menu" render={(props)=><Menu product={this.state.products} handlecar={this.handleCar} {...props}/> }   />
                <Route path="/cart" render={(props)=><ShoppingCart  products={this.state.products.filter((p) => p.isInCart)}  increament={this.incrementHandler}  onDelete={this.handleCar}  reset={this.resetHandeler} {...props}/>}  />
                <Redirect from="/" exact to="/home"/>
                <Redirect to ="/notFound" />

            </Switch>

            







            {/* <ShoppingCart products={this.state.products}  increament={this.incrementHandler}  onDelete={this.deleteHandeler}  reset={this.resetHandeler}/> */}

        </div>
        

    

        </>  );
    }
}
 
export default App;