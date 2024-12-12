
import useTheme from "../useTheme";

const NavBar = () =>{
   const {theme,toggleTheme} =  useTheme();
    return (
        <>
              <h1>Theme is {theme}</h1>
              <button onClick={() =>{
                toggleTheme();
              }}>Change</button>
        </>
      
    )
}
export default NavBar;