import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar } from "../components/navigation/Navbar";
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
                        <Redirect to="/index"/>
                    </Switch>
            </>
        </Router>
    )
}
