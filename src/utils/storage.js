const validateKey = key => {
    if (!key || typeof key !== "string"){
        throw new Error("Invalid storage key provided")
    }
}

//Function to save item(user) in the local storage.
export const storageSave = (key,value) => {
    validateKey(key)
    sessionStorage.setItem(key, JSON.stringify(value));
}

//Function to read item(user) in from the local storage.
export const storageRead = (key) => {
    validateKey(key)
    const data = sessionStorage.getItem(key);
    if(data){
        return JSON.parse(data);
    }
    return null;
}

//Function to remove item(user) from the local storage.
export const storageDelete = (key) => {
    validateKey(key)
    sessionStorage.removeItem(key);
}