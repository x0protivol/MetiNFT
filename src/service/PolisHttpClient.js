import {HttpClient} from "@metis.io/middleware-client";
import Config from '../config';

const {appId} = Config.polis;

class PolisHttpClient extends HttpClient{
    constructor(storageCredentials,accessToken, refreshToken, expiresIn) {
        super(appId, accessToken, refreshToken, expiresIn);
        this.env = '';
        this.storageCredentials = storageCredentials;
    }

    updateAuth(accessToken, refreshToken, expiresIn) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.oAuth2Client = new Oauth2Client(this.env)
    }

    handleRefreshToken(callback) {
        const previousAccessToken = this.accessToken;
        super.handleRefreshToken(() => {
            if (previousAccessToken !== this.accessToken) {
                this._save2Storage();
            }
            if (callback) {
                callback.apply(this);
            }
        });
    }

    async handleRefreshTokenAsync() {
        const result = await super.handleRefreshTokenAsync();
        if (result != null) {
            this._save2Storage();
        }
        return result;
    }

    _save2Storage = () => {
        if (this.storageCredentials) {
            this.storageCredentials.save({accessToken: this.accessToken, refreshToken: this.refreshToken});
        }
    }

    logOut(){
        this.storageCredentials.clear();
        delete this.storageCredentials;
    }
}

export default PolisHttpClient;
