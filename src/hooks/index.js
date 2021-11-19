import React, {useReducer} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {getAccessToken, getUserInfo} from "../service/polis";
import credentialStorage from "../utils/PolisCredentialStorage";
import {useDispatch} from "react-redux";
import {USER_LOADED_SUCCESS} from "../actions/types";


const polisLogin = async (code, dispatch) => {
    try {
        const {code: status, data} = await getAccessToken(code);
        if (status === 200) {
            const {access_token, refresh_token, expires_in} = data;
            const userInfo = await getUserInfo(access_token);
            credentialStorage.save({accessToken: access_token, refreshToken: refresh_token});

            console.log(userInfo);
            // update user information
            dispatch({type: USER_LOADED_SUCCESS, payload: userInfo});
        }
    }catch(error) {
        alert('Login Failed');
        window.location.href = '/';
    }
}

export function useCheckAuthCode() {
    const {search} = useLocation();
    const dispatch = useDispatch();
    React.useEffect(() => {
        const params = new URLSearchParams(search);
        const code = params.get('code');
        if (code) {
            polisLogin(code, dispatch);
        }
    },[search]);
}
