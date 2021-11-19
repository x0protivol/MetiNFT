import React, {Fragment} from 'react';
import img_arthology_logo from "../static/images/logo.jpg"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import {startAuthorization} from "../service/polis";

const Navbar = ({logout, isAuthenticated, user}) => {
    const onPressLogin = (evt) => {
        evt.preventDefault();
        startAuthorization();
    }
    console.log(user);
    const guestLinks = () => (
        <Fragment>
            {/*<span><Link className="btn btn-secondary" to={'/signup'} role="button">Create Account</Link></span>*/}
            <span><a className="btn btn-outline-secondary ms-2" onClick={onPressLogin} href={'#'}
                     role="button">Login</a></span>
        </Fragment>
    );
    const authLinks = () => (
        <div>
            <div style={{display: 'inline'}}>
                <span>{
                    user && user.display_name
                }</span>
                <br/>
                <span>{user.email}</span><br/>
                <span>{
                    user && user.eth_address
                }</span>
            </div>
            <span><a className="btn btn-outline-secondary" href='#!' role="button" onClick={logout}>Logout</a></span>
        </div>
    );


    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">


                    <img className="navbar-brand" src={img_arthology_logo} alt="" width="100"/>


                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                        </li>

                    </ul>

                    {isAuthenticated ? authLinks() : guestLinks()}


                </div>
            </div>
        </nav>
    );

};

const mapStateToProps = state => (
        {
            isAuthenticated: state.auth.isAuthenticated,
            user: state.auth.user
        }
    )
;

export default connect(mapStateToProps,
    {
        logout
    }
)(Navbar);
