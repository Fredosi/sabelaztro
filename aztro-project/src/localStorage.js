export const getLocalStorage = () => JSON.parse(window.localStorage.getItem('localStorage'));
export const setLocalStorage = (store) =>
window.localStorage.setItem('localStorage', JSON.stringify(store));
