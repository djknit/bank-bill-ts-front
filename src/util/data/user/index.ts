import { LoginUtilProps, UserInfo } from "./types";

let currentUser: UserInfo | null;

function login({ username, password }: LoginUtilProps): Promise<UserInfo> {
    console.log('login util')
    return new Promise((resolve, reject) => {
        // check creds with api
        // if valid creds, save user info
        // else, handle error
        currentUser = {
            username
        };
        return resolve(currentUser);
    });
}

function signUp({ username, password }: LoginUtilProps): Promise<UserInfo> {
    console.log('sign up util')
    return new Promise((resolve, reject) => {
        // attempt create user via api
        // if success, save user info
        // else, handle error
        currentUser = {
            username
        };
        return resolve(currentUser);
    });
}

function logout(): Promise<void> {
    console.log('logout util')
    return new Promise((resolve, reject) => {
        currentUser = null;
        return resolve();
    });
}

function updateUserInfo() {
    console.log('updateUserInfo util')
    return new Promise((resolve, reject) => {

    });
}

export {
    login,
    logout,
    updateUserInfo,
    signUp
};
export type {
    LoginUtilProps,
    UserInfo
};
export default {
    login,
    logout,
    updateUserInfo
};
