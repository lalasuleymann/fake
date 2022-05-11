import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./pages/home/header/header";
import Home from "./components/home";
import Shop from "./components/shop";
import About from "./components/about";
import Contact from "./components/contact";
import Basket from "./components/basket"
import ShopDetail from "./components/detail";
import Footer from "./pages/home/footer/footer";

function App(){
    return(
        <Router>
                <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/shop" exact component={Shop}/>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/basket" exact component={Basket}/>
                <Route path="/detail" exact component={ShopDetail}/>
            </Switch>
                <Footer />
        </Router>
    );
}


export default App;