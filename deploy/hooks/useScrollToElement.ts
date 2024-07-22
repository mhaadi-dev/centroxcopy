"use client"
import { useEffect } from 'react';

const SHOW_SERVICES = 'SHOW_SERVICES';
const SHOW_SOLUTIONS = 'SHOW_SOLUTIONS';

const useScrollToElement = () => {
  
  useEffect(() => {
    const storedServices = localStorage.getItem(SHOW_SERVICES);
    const storedSolutions = localStorage.getItem(SHOW_SOLUTIONS);

    const scrollToServices = storedServices ? JSON.parse(storedServices) : false;
    const scrollToSolutions = storedSolutions ? JSON.parse(storedSolutions) : false;

    const scrollToElement = (elementId:any) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    const resetLocalStorage = () => {
      localStorage.setItem(SHOW_SERVICES, JSON.stringify(false));
      localStorage.setItem(SHOW_SOLUTIONS, JSON.stringify(false));
    };

    if (scrollToServices) {
      setTimeout(() => {
        scrollToElement('services');
        resetLocalStorage();
      }, 15);
    }

    if (scrollToSolutions) {
      setTimeout(() => {
        scrollToElement('solutions');
        resetLocalStorage();
      }, 15);
    }
  }, []);
};

export default useScrollToElement;
