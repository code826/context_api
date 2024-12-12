import { useContext } from "react";
import { colorContext } from "../colorContext";
import { fontContext } from "../fontContext";
import useTheme from "../useTheme";

const GrandChildren = () =>{
   const colorObj =  useContext(colorContext);
   const fontVal = useContext(fontContext);
   const {theme,toggleTheme} = useTheme();
   console.log('font',fontVal);
   console.log('colorObj',colorObj);
    return(
        <p>Color is <span style={{color:colorObj.color}}>{colorObj.color} Theme is : {theme}</span></p>
    )
}

export default GrandChildren;