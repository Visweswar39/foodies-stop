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
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // boolean value
  return onlineStatus;
};

export default useOnlineStatus;
