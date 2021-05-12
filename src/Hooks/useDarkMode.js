import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage('dark');
  return [storedValue, setValue];
}