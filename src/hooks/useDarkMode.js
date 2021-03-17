import useLocalStorage from './useLocalStorages';

const useDarkMode = () => {
  const [storedValue, setValue] = useLocalStorage('enabled')

  return [storedValue, setValue];
}

export default useDarkMode;