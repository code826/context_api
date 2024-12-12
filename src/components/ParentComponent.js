import { useState } from "react"
import ChildComponent from "./ChildComponent";
import { colorContext } from "../colorContext";
import { fontContext } from "../fontContext";

const ParentComponent = () =>{
    const [color,setColor] = useState("#00000");
    
    
    return (
        <>
         <input type="color" name ="color" value={color}  onChange={(e) =>{
                setColor(e.target.value);
            }}/>
        <colorContext.Provider value={{color,setColor}}>
            <fontContext.Provider value="30px">
                <ChildComponent/>
            </fontContext.Provider>
         
        </colorContext.Provider>
           
        </>
    )
}

export default ParentComponent;