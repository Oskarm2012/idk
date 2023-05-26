import React from "react";
import { useState, useEffect } from "react";

export const Counters = ()=>{
    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(0);
    const[count3, setCount3] = useState(0);

    useEffect(()=>{
        setTimeout(function(){
            setCount(count+1);
        },1000)
    });

   useEffect(()=>{
        setTimeout(function(){
            setCount2(count2+1);
        },1000)
        
    },[]);
    useEffect(()=>{
        setCount3(count3+1)
    },[count2]);

    return(
        <div>
                <h1> time {count }</h1>
                <h1> time {count2 }</h1>
                <h1> time {count3 }</h1>
        </div>
    )
}