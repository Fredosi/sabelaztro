export const getStore = () => JSON.parse(window.localStorage.getItem('store'));
export const setStore = (store) =>
window.localStorage.setItem('store', JSON.stringify(store));
