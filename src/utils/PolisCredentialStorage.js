class PolisCredentialStorage {
    constructor(key) {
        this._key = key;
        this._load();
    }

    _load(){
        const json = localStorage.getItem(this._key);
        try {
            const {accessToken, refreshToken} = JSON.parse(json);
            this.accessToken = accessToken;
            this.refreshToken = refreshToken;
        } catch(ex) {
            console.log('Credentials -- load failed', ex);
        }
    }

    save({accessToken, refreshToken}){
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;

        // Save to storage always
        this._save2Storage();
    }

    get isValid() {
        return this.accessToken && this.refreshToken;
    }

    clear(){
        this.accessToken = ""
        this.refreshToken = "";
        localStorage.removeItem(this._key);
    }

    _save2Storage(){
        const object = {accessToken: this.accessToken, refreshToken: this.refreshToken};
        localStorage.setItem(this._key, JSON.stringify(object));
    }
}

const credentialStorage = new PolisCredentialStorage('_poils_creds');

export {PolisCredentialStorage};
export default credentialStorage;

