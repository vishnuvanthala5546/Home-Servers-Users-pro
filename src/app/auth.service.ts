import {promise} from 'selenium-webdriver';


export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
