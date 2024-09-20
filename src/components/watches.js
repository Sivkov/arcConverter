import React, { useEffect, useState } from 'react';
import ThemeSwitcher from './themeSwitcher';


const Watches= ()=> {
    const [time, setTime] = useState(false);
    useEffect(() => {
        startTime()      
    },[]); 

    const startTime = () => {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        let current =  h + ":" + m + ":" + s
        setTime (current);
        setTimeout(startTime, 1000);
    }
  
    const checkTime = (i) => {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }  

  return (
  <div id="watches">
    <ThemeSwitcher/>
    <div className="d-none" >
        {time}      
    </div>
  </div>
  
  );
}

export default Watches;
