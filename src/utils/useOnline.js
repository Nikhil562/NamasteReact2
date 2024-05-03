import { useEffect } from "react";
import { useState } from "react";
const useOnline =()=>{
    const [isOnline,setIsOnline] =useState(true);

    useEffect(()=>{
        window.addEventListener('online',()=>{
            //whenever u go online this code will trigger
            setIsOnline(true)
        })
        window.addEventListener('offline',()=>{
            //whenever u go online this code will trigger
            setIsOnline(false);
        })
    },[])

    return isOnline;
}
export default useOnline