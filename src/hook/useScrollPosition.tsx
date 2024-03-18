import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setScrollPosition(window.scrollY);
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

const useValuePassedThreshold = (threshold: number) => {
  const scrollPosition = useScrollPosition();
  const [passedThreshold, setPassedThreshold] = useState(false);

  useEffect(() => {
    if (scrollPosition >= threshold) {
      setPassedThreshold(true);
    } else {
      setPassedThreshold(false);
    }
  }, [scrollPosition, threshold]);

  return passedThreshold;
};

export default useValuePassedThreshold;
