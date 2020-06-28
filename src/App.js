import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignUpAcknowledgmentPage from "./pages/authentication/SignUpAcknowledgmentPage";
import ScreenOneSignUpPage from "./pages/authentication/ScreenOneSignUpPage";
import ScreenTwoSignUpPage from "./pages/authentication/ScreenTwoSignUpPage";
import ScreenThreeSignUpPage from "./pages/authentication/ScreenThreeSignUpPage";
import InterviewPage from "./pages/interview/InterviewPage";
import InterviewQuestionsPage from "./pages/interview/InterviewQuestionsPage";
import InterviewAcknowledgmentPage from "./pages/interview/InterviewAcknowledgmentPage";
import LandingPage from "./pages/authentication/LandingPage";
import WelcomePage from "./pages/authentication/WelcomePage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/individual/personal">
                    <ScreenOneSignUpPage/>
                </Route>

                <Route exact={true} path="/">
                    <LandingPage />
                </Route>

                <Route exact={true} path="/register/membership">
                    <WelcomePage />
                </Route>

                <Route exact={true} path="/individual/location">
                    <ScreenTwoSignUpPage/>
                </Route>

                <Route exact={true} path="/individual/account">
                    <ScreenThreeSignUpPage/>
                </Route>

                <Route exact={true} path="/signup/success">
                    <SignUpAcknowledgmentPage/>
                </Route>

                <Route exact={true} path="/interview">
                    <InterviewPage/>
                </Route>

                <Route exact={true} path="/interview/questions/:question_number">
                    <InterviewQuestionsPage/>
                </Route>

                <Route exact={true} path="/interview/success">
                    <InterviewAcknowledgmentPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
