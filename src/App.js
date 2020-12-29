import './App.css';
import Button from "./components/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {
  return (
    <div className="App" id='quote-box'>
      <div id='text'>
      <h1 id="new-quote">Definiteness of purpose is the starting point of all achievement.</h1>
      <p id="author">- W. Clement Stone</p>
      <a href="twitter.com/intent/tweet" id="tweet-quote"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      <a href="https://facebook.com/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>  
      

      
      
      </div>
         
      

      <Button />    
    </div>
  );
}

export default App;
