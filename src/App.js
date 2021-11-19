import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./views/home";
import Login from "./views/login";
import Singup from "./views/signup";
import Activate from "./views/activate";
import ResetPass from "./views/resetPassword";
import ResetPassConfirm from "./views/resetPasswordConfirm";
import Layout from "./hocs/layout";

import {Provider} from "react-redux";
import store, {persistor} from "./store";
import {PersistGate} from 'redux-persist/integration/react';

import credentialStorage from "./utils/PolisCredentialStorage";
import {getUserInfo, refreshToken} from "./service/polis";
import {USER_LOADED_SUCCESS} from "./actions/types";


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Layout>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                        </Switch>
                    </Layout>
                </Router>
            </PersistGate>
        </Provider>
    )
}

export default App;
