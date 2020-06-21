import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignUpPage from "./pages/authentication/SignUpPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <SignUpPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
