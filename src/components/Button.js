import "./Button.css"
import {useEffect} from "react";

function Button({change, color}) {
    useEffect(()=> {    
        document.getElementById("root").style.backgroundColor = color[0]
         
    
      }, [color]);
    

    
    return <button onClick={change} id="new-quote" 
                   style={{backgroundColor: color[0]}}>New quote</button>
}
export default Button;