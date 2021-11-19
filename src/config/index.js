const Config = {
    polis: {
        appId: process.env.REACT_APP_POLIS_APP_ID,
        secretKey: process.env.REACT_APP_POLIS_SECRET_KEY,
        authReturnUrl: process.env.REACT_APP_POLIS_AUTH_RETURN_URL,
        accessTokenEndpoint: 'https://polis.metis.io/api/v1/oauth2/access_token'
    }
}

export default Config;
