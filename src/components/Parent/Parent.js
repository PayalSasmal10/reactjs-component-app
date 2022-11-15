import Child from "../Child/Child";
import React from "react";
import { useState } from "react";

const Parent = () => {
    const [data, setData] = useState('');
    const parentToChild = () => {
        console.log("parenttochild");
        setData("This is after setting data using useState hook");
    }
    return (
        <div>
            <button onClick={() => parentToChild()} >Click Parent</button>
            <Child test={data}/>
        </div>
    );
};

export default Parent;