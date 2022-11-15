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
            <Child />
            <button onClick={() => parentToChild()} >Click Parent</button>
        </div>
    );
};

export default Parent;