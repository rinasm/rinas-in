/**
 * Created by intellicar-rinas on 8/1/18.
 */
export default (defaultStore)=>{

    window.store = {...defaultStore};
    window.storeListeners = {};

    window.updateStore =newProps=> {
        let keyUpdated = ['all', ...Object.keys(newProps)];
        window.store = {...window.store, ...newProps};
        for(let idx in keyUpdated) {
            if(window.storeListeners[keyUpdated[idx]]) {
                for(let jdx in window.storeListeners[keyUpdated[idx]]) {
                    window.storeListeners[keyUpdated[idx]][jdx](window.store, Object.keys(newProps));
                }
            }
        }
    };

    window.subscribe =(listener, key='all')=> {
        if(!(key in window.storeListeners)){
            window.storeListeners[key] = {};
        }
        let newKey = null;
        while (true) {
            newKey = Math.random();
            if(!(newKey in window.storeListeners[key])) {
                break;
            }
        }
        window.storeListeners[key][newKey] = listener;
        return ()=>{
            if(newKey in window.storeListeners[key]) {
                delete  window.storeListeners[key][newKey];
            }
        }
    };

    window.getStore =()=> {
        return window.store;
    }

}