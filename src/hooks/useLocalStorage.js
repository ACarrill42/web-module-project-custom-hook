import { useState } from 'react';

//how to set up local storage.

const useLocalStorage = (initialValue, key) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  })
  const setValue = value => {
    setStoredValue(key);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue];
};

export default useLocalStorage