import React from "react";
import { useState } from "react";

export const List = () =>{
    const [content, setContent] = useState([])
    const [inputValue, setInputValue] = useState('')


    function clearList(){
        setContent([])
    }

    const remevoHandler = (removeindex)=>{
        const removeitem = content.filter((item, index) =>{

            return removeindex !== index;
        });
        setContent(removeitem);
    }


    return(
        <div>
            <div>
                <form onSubmit={(event)=>{
                    event.preventDefault()
                    const temp = [inputValue,...content]
                    setContent(temp)
                    setInputValue('')
                }}>
                    <input type = "text" placeholder="Type here..." 
                    value={inputValue}
                    onChange={e=> setInputValue(e.target.value)}
                    required/> 
                    <input type = "submit" value="Linkin haku"/>
                    {
                        content.map((item,index)=>(
                        <ul>
                            <li>
                                <h2 key={index}>{item}</h2>
                                <button
                                form = "toinen"
                                onClick={()=>remevoHandler(index)}>Remove</button>
                            </li>
                        </ul>

                        ))
                    }
                </form>
                <button onClick={clearList}>Clear List</button>
                                
            </div>
        </div>
    )
}