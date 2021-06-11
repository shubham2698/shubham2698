import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import { Switch,Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {
return(
<>
<Navbar/>
<Switch>
  <Route exact path="/Contact" component={Contact} />
  <Route exact path="/About" component={About} />
  <Route exact path="/Service" component={Service} />
  <Route exact path="/" component={Home} />
  <Redirect to="/"/>
</Switch>
<Footer/>
</>
);
};

export default App;