import { isEmptyOrNull } from "./helper";

class LocalStore {
  storage = undefined;
  token = null;
  constructor() {
    this.initLocalStore();
  }

  initLocalStore = (obj) => {
    if (!isEmptyOrNull(obj)) {
      this.storage = obj.localStorage;
    } else if (window) {
      this.storage = window?.localStorage;
    }
  };

  addToken = (token) => {
    this.token = token;
    this.storage.setItem("token", JSON.stringify(token));
  };

  getToken = () => {
    const tokenStr = this.storage.getItem("token");
    if (!isEmptyOrNull(tokenStr)) {
      this.token = JSON.parse(tokenStr);
    }

    return this.token;
  };

  removeToken = () => {
    this.storage.removeItem("token");
    this.token = null;
  };
}

const localStore = new LocalStore();

export default localStore;
