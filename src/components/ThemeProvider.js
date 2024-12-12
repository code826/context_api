// context

import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) =>{
    const [theme,setTheme] = useState('light');

    useEffect(() =>{
        //time

    },[]);
    
    const toggleTheme = () =>{
        const themeNext = theme == "dark" ? "light" : "dark";
        setTheme((prevTheme) =>{
            return (prevTheme == "dark" ? "light" :"dark")
        });
    };


    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext};

export default ThemeProvider;
