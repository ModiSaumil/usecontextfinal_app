import React, { useContext } from 'react'
import { globalinfo } from './App';

function SuperChild() {

    const Day = "sunday";
    const Bgcolor = "green";
    const { appcolor, day, b,newv } = useContext(globalinfo);
    console.warn(appcolor);
    console.warn(Bgcolor);
    return (
        <div>
            <h1 style={{ color: appcolor ,backgroundColor:newv}}>Super Child Component</h1>
            <button onClick={() => (day(Day),b(Bgcolor))}>click</button>
        </div>
    )
}

export default SuperChild;

