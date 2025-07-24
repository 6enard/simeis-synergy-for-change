import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth fade transition to top
    const scrollToTop = () => {
      const scrollStep = -window.scrollY / (500 / 15);
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    };

    // Add fade effect
    document.body.style.opacity = '0.7';
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    
    setTimeout(() => {
      scrollToTop();
      document.body.style.opacity = '1';
    }, 100);

  }, [pathname]);

  return null;
};

export default ScrollToTop;