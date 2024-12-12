import { Component } from "react";
import { colorContext } from "../colorContext";

class GrandChildrenClass extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <>
                 <colorContext.Consumer>
                    {(value) =>{
                        return  <p>Color is <span style={{color:value}}>{value}</span></p>
                    }}
                </colorContext.Consumer>
                
            </>

        )
       
    }
}

export default GrandChildrenClass;