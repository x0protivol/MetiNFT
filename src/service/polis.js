import axios from "axios";
import {Oauth2Client, HttpClient} from "@metis.io/middleware-client";
import Config from '../config';

const {appId} = Config.polis;

const oauth2Client = new Oauth2Client();

export const getAccessToken = (code) => {
    const {polis: {accessTokenEndpoint, appId: app_id, secretKey:app_key}} = Config;
    return axios.get(accessTokenEndpoint, {
        params: { app_id, app_key, code}
    }).then(res => {
        return res.data;
    })
}

export const startAuthorization = () => {
    oauth2Client.startOauth2(Config.polis.appId, Config.polis.authReturnUrl);
}

export const getUserInfo = async (accessToken) => {
    return oauth2Client.getUserInfoAsync(accessToken);
}

/*
export const refreshToken = async (refreshToken) => {
    const oauthUser = await oauth2Client.refreshTokenAsync(appId, refreshToken);
    credentialsStorage.save(oauthUser);
}
*/

export {oauth2Client};
