import { useRef, useEffect } from "react";

 export const useUnmount = (fn) => {
     const fnRef = useRef(fn);
     //fnRef.current = fn;
     useEffect(() => () => fnRef.current(), [])
 };