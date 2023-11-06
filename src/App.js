import Child from "./child";
import React, { createContext, useCallback, useState } from "react";
import Registration from "./registration";
export const globalinfo = createContext();
export const reginfo = createContext();
function App() {

  const [day, setday] = useState("monday");
  const [color, setColor] = useState('red');
  const [themecolor,settheme] = useState('black')
  const [bgcolor, setbgcolo] = useState('orange')

  const getday = (item) => {
    console.log(item)
    setday((item) => (item === 'sunday' ? 'monday' : 'sunday'));
  }


  const bgc = (item) => {
    console.log(item)
    setbgcolo((item) => (item === 'green' ? 'orange' : 'green'));
  }

  return (
    <div>
      <globalinfo.Provider value={{ appcolor: color, day: getday, b: bgc,newv : bgcolor }}>
        <h1>App component</h1>
        <h2 style={{ backgroundColor: bgcolor }}>Day : {day}</h2>
        <Child />
      </globalinfo.Provider>

      {/* <reginfo.Provider value={{theme:themecolor}}>
        <Registration />
      </reginfo.Provider> */}

    </div>

  );
}



export default App;
