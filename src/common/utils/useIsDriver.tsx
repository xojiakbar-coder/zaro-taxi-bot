import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useIsDriver = (): boolean => {
  const location = useLocation();
  const [isDriver, setIsDriver] = useState(() => {
    return localStorage.getItem('isDriver') === 'true';
  });

  useEffect(() => {
    const isDriverPath = location.pathname.startsWith('/driver');

    if (isDriverPath) {
      setIsDriver(true);
      localStorage.setItem('isDriver', 'true');
    } else {
      setIsDriver(false);
      localStorage.removeItem('isDriver');
    }
  }, [location.pathname]);

  return isDriver;
};
