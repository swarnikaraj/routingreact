import logo from './logo.svg';
import './App.css';

import {Route} from "react-router-dom"

import { Home } from './components/home';
import {Navbar} from './components/navbar';
import {Contact} from './components/contact';
import {Products } from './components/products';
import {About} from './components/about';
import {Users} from  './components/users';
import {Userdetails} from './components/userdetail';
import {Doesnotexist} from './components/pagenotfound';
import {Productdetails} from './components/productList';
import {Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Switch>

      <Route path="/"  exact>
      <Home/>
      </Route>
      <Route path="/about" >
      <About/>
      </Route>
      <Route path="/contact" >
      <Contact/>
      </Route>
      <Route path="/products" exact >
      <Products/>
      </Route>

      <Route path="/products/:id" exact >
      <Productdetails/>
      </Route>

    
      <Route path="/users" >
      <Users/>
      </Route>
      <Route path="/users/:id" >
      <Userdetails/>
      </Route>
      <Route >
      <Doesnotexist/>
      </Route>
      
      </Switch>
     
    </div>
  );
}

export default App;
