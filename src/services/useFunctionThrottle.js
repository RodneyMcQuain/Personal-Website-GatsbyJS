import { useEffect } from 'react';

export const useFunctionThrottle = (func, delay) => {
    const throttledFunc = () => setTimeout(func, delay);
    let timer;
    
    useEffect(() => {
        if (!timer)
            timer = throttledFunc();

        return () => clearTimeout(timer);
    }, [timer]);
  
    return throttledFunc;
}