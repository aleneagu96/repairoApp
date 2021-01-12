import React, { Component } from "react";
import AddRepairOrder from "./components/repair_order/AddRepairOrder";
import ListRepairOrders from "./components/repair_order/ListRepairOrders";
import UpdateRepairOrder from "./components/repair_order/UpdateRepairOrder";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ListClient from "../src/components/client/ListClient";
import AddClient from "../src/components/client/AddClient";
import LogIn from "../src/components/LogIn.component";
import Home from "./components/Home";
import Services from "./components/Services";
import UpdateClient from "./components/client/UpdateClient";



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="home" className="navbar-brand">
            Repairo
          </a>
                  <div className="navbar-nav mr-auto">
                  
            <li className="nav-item">
                   <Link to={"/services"} className="nav-link">
                Services 
              </Link>
            </li>
                  <li className="nav-item">
                   <Link to={"/repair_order"} className="nav-link">
                Repair Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/newRepairOrder"} className="nav-link">
                Add new repair order
              </Link>
            </li>
            <li className="nav-item">
                   <Link to={"/clients"} className="nav-link">
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/newClient"} className="nav-link">
                Register 
              </Link>
            </li>
            <li className="nav-item">
                   <Link to={"/log_in"} className="nav-link">
                Log in
              </Link>
            </li>
            <li className="nav-item" >
                   <Link to={`update/`} className="nav-link">
                Update 
              </Link>
            </li>
           
            </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route path= "/repair_order" component={ListRepairOrders} />
            <Route path="/newRepairOrder" component={AddRepairOrder} />
            <Route path="/repair_order/update/:id" component={UpdateRepairOrder} />
            <Route path="/clients" component={ListClient}/>
            <Route path="/newClient" component={AddClient} />
            <Route path="/log_in" component={LogIn}/>
            <Route path="/home" component={Home}/>
            <Route path= "/services" component={Services}/>
            <Route path="/update/" component={UpdateClient}/>


          </Switch>
          
        </div>
      </div>
      </Router>
    );
  }
}

export default App;










// import './App.css';
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import ListRepairOrders from "../src/components/ListRepairOrders";
// import EditRepairOrder from "../src/components/EditRepairOrder";
// import AddRepairOrder from "../src/components/AddRepairOrder";
// import ViewRepairOrder from '../src/components/ViewRepairOrder';

// export default function App() {
//   return (
//     <div>
//       <Router>
//         <div className="container">
//         <Switch> 
//                           <Route path = "/" exact component = {ListRepairOrders}></Route>
//                           <Route path = "/repair_orders" component = {ListRepairOrders}></Route>
//                           <Route path = "/newRepairOrder/:id" component = {AddRepairOrder}></Route>
//                           <Route path = "/view-repair_order/:id" component = {ViewRepairOrder}></Route>
//                           <Route path = "/update/:id" component = {EditRepairOrder}></Route>
//                     </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }