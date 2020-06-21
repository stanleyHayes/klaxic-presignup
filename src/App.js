import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignUpPage from "./pages/authentication/SignUpPage";
import SignUpAcknowledgmentPage from "./pages/authentication/SignUpAcknowledgmentPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <SignUpPage/>
                </Route>

                <Route path="/signup/success">
                    <SignUpAcknowledgmentPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
