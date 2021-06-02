
import React from 'react'
import Navbar from './Modules/Layout/Navbar/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Mobiles from './Modules/Product/Components/Mobiles';
import Laptops from './Modules/Product/Components/Laptops';
import Watches from './Modules/Product/Components/Watches'
import Login from './Modules/User/Components/Login';
import Upload from './Modules/Product/Components/Upload';
import  Signup  from './Modules/User/Components/Signup';
import Profile from './Modules/User/Components/Profile';
import Cart from './Modules/Order/Components/Cart';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={""}/>
      <Route path="/mobiles" component={Mobiles}/>
      <Route path="/laptops" component={Laptops}/>
      <Route path="/watches" component={Watches}/>
      <Route path="/upload" component={Upload}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/login" component={Login}/>
      <Route path="/signUp" component={Signup}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
    

    </Router>
    
    
    </>
        
  );
}

export default App;
