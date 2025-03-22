/* eslint-disable react-hooks/exhaustive-deps */
// Disable warning here since the hook will only run once on mount and no need for dependencies
import { useEffect } from "react";



const useSmoothFadeInTransition = (
  setState1: React.Dispatch<React.SetStateAction<boolean>>,
  setState2: React.Dispatch<React.SetStateAction<boolean>>,
  timer1: number,
  timer2: number,
) => {
  useEffect(() => {
    const divTimer = setTimeout(() => {
      setState1(true);
    }, timer1);

    const contentTimer = setTimeout(() => {
      setState2(true);
    }, timer2);

    return () => {
      clearTimeout(divTimer);
      clearTimeout(contentTimer);
    };
  }, []);
};

export default useSmoothFadeInTransition;