import {useState} from "react";


export const useLocalStorage=(keyName, defaultValue)=>{
    const [storedValue, setStoredValue] = useState(()=>{
        const storedData = localStorage.getItem(keyName);

        return storedData ? JSON.parse(storedData) : defaultValue;
    });

    const setLocalStorageValue = (newValue)=>{
        localStorage.setItem(keyName, JSON.stringify(newValue));

        setStoredValue(newValue);
    };

    return[storedValue, setLocalStorageValue];

};