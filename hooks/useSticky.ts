import React, { useEffect, useState } from "react";

const useSticky = (
  childRef: React.RefObject<HTMLElement>,
): [boolean, number] => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const parentContainer = document.getElementById("parent-container");
      const childContainer = childRef.current;

      if (!childContainer || !parentContainer) return;

      const { bottom: stickyBottom, height } =
        childContainer.getBoundingClientRect();

      if (window.innerHeight >= stickyBottom) {
        setIsSticky(true);
        setTop(height - window.innerHeight + 100);
      } else {
        setIsSticky(false);
        setTop(0);
      }
    };

    // Optional: Debounce scroll event
    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [childRef.current]); // Include childRef.current in dependency array

  return [isSticky, top];
};

// Debounce function to limit the execution of a function to once every `wait` milliseconds
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default useSticky;
