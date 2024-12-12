import { useContext } from "react"
import { ThemeContext } from "./components/ThemeProvider"

const useTheme = () =>{
   const themeContext = useContext(ThemeContext);
   if(!themeContext){
    throw new Error("use theme must be use within Theme Provider");
   }
   return themeContext;
}
export default useTheme;