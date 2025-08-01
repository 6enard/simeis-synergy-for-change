import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to top of page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;