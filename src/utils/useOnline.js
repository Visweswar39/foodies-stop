// import { useEffect, useState } from "react";

// const useOnline = () => {
//   const [isOnline, setIsOnline] = useState(true);
//   useEffect(()=>{
//     window.addEventListener("online", (event) => {
//         console.log(event);
//         setIsOnline(true);
//       });
    
//       window.addEventListener("offline", (event) => {
//         console.log(event);
//         setIsOnline(false);
//       });
//   },[])

//   window.ononline = () => {
//     console.log('online')
//   }
  
//   return isOnline;
// };
// export default useOnline;

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {

    const handleOnline = () => {
      setOnlineStatus(true);
    }
    const handleOffline = () => {
      setOnlineStatus(false);
    }

    window.addEventListener("offline",handleOffline);

    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener('online',handleOnline)
      window.removeEventListener('offline',handleOffline)
    }
  }
  , []);

  // boolean value
  return onlineStatus;
};

export default useOnlineStatus;
