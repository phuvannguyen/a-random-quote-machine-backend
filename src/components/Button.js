import "./Button.css"

function Button({change, color}) { 
    
    return <button onClick={change} id="new-quote" 
                   style={{backgroundColor: color[0]}}>New quote</button>
}
export default Button;