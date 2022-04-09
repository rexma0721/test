import { ethers } from 'ethers';

export const setItem = (key, item) => {
    if(item) {
        window.localStorage.setItem(key, item);
    } else {
        window.localStorage.removeItem(key);
    }
}

export const getItem = (key) => {
    if(key) {
        return window.localStorage.getItem(key);
    }
}

export const isAuthenticated = () => {
    if(getItem('access_token')) {
        return true ;
    }
    return false ;
}

export const getLibrary = (provider) => {
    return new ethers.providers.Web3Provider(provider) ;
}