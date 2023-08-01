// import { useState } from "react";

// export const useLocalStorage = (keyName, defaultValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const value = window.localStorage.getItem(keyName);
//       if (value) {
//         console.log(value, "value")
//         return JSON.parse(value);
//       } else {
//         window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
//         return defaultValue;
//       }
//     } catch (err) {
//       return defaultValue;
//     }
//   });
//   const setValue = (newValue) => {
//     try {
//       window.localStorage.setItem(keyName, JSON.stringify(newValue));
//     } catch (err) {}
//     setStoredValue(newValue);
//   };
//   return [storedValue, setValue];
// };

import React, { useEffect, useState } from 'react';


const useLocalStorage = (key, initValue) => 
  {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initValue);
    useEffect(() => {
        localStorage.setItem(JSON.stringify(value))
    },[key, value])
    
    return[value, setValue];
  }

export default useLocalStorage;