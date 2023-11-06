import React, { useContext } from 'react'
import { globalinfo } from './App';
import SuperChild from './superchild';


function Child() {

    const { appcolor } = useContext(globalinfo);
    console.warn(appcolor);
    

    return (
        <div>
            <h1 style={{color:appcolor}}>Child Component</h1>
            <SuperChild/>
        </div>
    )
}

export default Child;

