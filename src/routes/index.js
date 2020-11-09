import React from "react";
import { BrowserRouter,Switch } from "react-router-dom";

import Route from "./Route"

import HomePage from "../pages/HomePage"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Dashboard from "../pages/Dashboard"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" exact component={SignIn} />
                <Route path="/register" exact component={SignUp} />
                <Route path="/dashboard" exact component={Dashboard} isPrivate />
            </Switch>
        </BrowserRouter>
    )
}
