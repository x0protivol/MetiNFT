import React, { useState, useEffect } from "react";
import { Link, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import {login, isAuthenticated} from "../actions/auth";
import img_arthology_logo from "../static/images/arthology_logo.svg"

const Login = ({ login, isAuthenticated }) => {

    useEffect(() => {
        document.title = 'Arthology - Login';
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
      e.preventDefault();
      login(email, password);
    };

    //Is the user authnticated
    //Then redirect to homepage
    if (isAuthenticated){
        return <Redirect to='/' />
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-sm align-self-center">

                        <div className="card ">
                            <div className="card-body text-center">
                                <img className="mb-4 " src={img_arthology_logo} alt="" width="250"
                                     height="72"/>
                                <form className="form-floating" onSubmit={e => onSubmit(e)}>
                                    <h5 className="card-title">Sign In</h5>
                                    <div className="form-floating  mb-3">
                                        <input className='form-control' type='email' placeholder='email' name='email'
                                               value={email} onChange={e => onChange(e)} required/>
                                        <label htmlFor="floatingInputInvalid">E-mail</label>
                                    </div>
                                    <div className="form-floating mb-3 ">
                                        <input className='form-control' type='password' placeholder='password'
                                               name='password' value={password} onChange={e => onChange(e)}
                                               minLength='6' required/>
                                        <label htmlFor="floatingInputInvalid">Password</label>
                                        <div id="emailHelp" className="form-text d-flex align-content-start"><Link
                                            className="text-black-50" to='/reset-password'>Forgot your password?</Link>
                                        </div>
                                    </div>
                                    <button className='btn btn-primary' type='submit'>Login</button>
                                </form>
                            </div>
                        </div>

                        <p className='mt-3'>Don't have an account? <Link to='/signup'>Sign Up!</Link></p>

                    </div>


                </div>
            </div>

        </div>
    );

};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});



export default connect(mapStateToProps, { login })(Login);

