import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar } from "../components/navigation/Navbar";
import { AboutPage } from "../components/pages/About/AboutPage";
import { AccountPage } from "../components/pages/Account/AccountPage";
import { CartPage } from "../components/pages/Cart/CartPage";
import { HomePage } from '../components/pages/Home/HomePage'
import { SearchPage } from "../components/pages/Search/SearchPage";

export const MainRouter = () => {
    return (
        <Router>
            <>
                <Navbar/>
                    <Switch>
                        <Route exact  path="/index" component={HomePage}/>
                        <Route path="/search/:word" component={SearchPage} />
                        <Route path="/cart" component={CartPage}/>
                        <Route path="/account" component={AccountPage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Redirect to="/index"/>
                    </Switch>
            </>
        </Router>
    )
}
