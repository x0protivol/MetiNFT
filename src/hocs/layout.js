import React, { useEffect}from "react";
import Navbar from "../components/navbar";
import {connect} from "react-redux";
import {checkAuthenticaded, load_user} from "../actions/auth";

const Layout = (props) => {

    /*
    useEffect(() => {
        props.checkAuthenticaded();
        props.load_user();
    }, []);
    */

    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    );

};

export default connect(null, {checkAuthenticaded, load_user})(Layout);
