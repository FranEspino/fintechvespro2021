const TOKEN = '';
const USERINFORMATION = {};
export function setToken(toke)  {
    localStorage.setItem(TOKEN, toke);
}

export function setUserInformation(userInfo) {
    const userInformation = JSON.stringify(userInfo);
    localStorage.setItem(USERINFORMATION, userInformation);
}

export function getToken() {
    return localStorage.getItem(TOKEN);
}

export function getUserInformation() {
    return localStorage.getItem(USERINFORMATION);
}

export function removeToken(){
    localStorage.removeItem(TOKEN);   
     localStorage.removeItem(USERINFORMATION);

}