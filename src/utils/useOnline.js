import { useEffect } from "react";
import { useState } from "react";
const useOnline =()=>{
    const [isOnline,setIsOnline] =useState(true);

    useEffect(()=>{

        const handleOnLine=()=>{
            setIsOnline(true)
        }

        const handleOffLine=()=>{
            setIsOnline(false);
        }
        window.addEventListener('online',handleOnLine)
        window.addEventListener('offline',handleOffLine)

        return ()=>{
            window.removeEventListener('online',handleOnLine)
            window.removeEventListener('online',handleOffLine)
        }
    },[])

    return isOnline;
}
export default useOnline


///whenerver we are going online , coming online after offline a new event listener is not created bs we hv a empty dependency array [] i useeffect above  , it wont call this useEffect again 

// But if We are on Home page and we move to ABout page the event listener is still there so its a goof practice to clr the event listeners whenever we go out of component 


//Chunking
//Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
//Dynamic Importing
