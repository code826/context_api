import NavBar from "./Navbar";
import ParentComponent from "./ParentComponent";
import ThemeProvider from "./ThemeProvider";


function App() {
  return (
    <>
      <div className="App">
        <ThemeProvider>
          <ParentComponent/>
          <NavBar/>
        </ThemeProvider>
       </div>
    </>
   
  );
}

export default App;
