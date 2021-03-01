import './App.css';
import {useEffect} from "react";
import Button from "./components/Button"
import Content from "./components/Content"
import Social from "./components/Social"
import { connect } from "react-redux"
import { actionChange, receivingData, errData, successData} from "./redux/action"
import axios from "axios"


function SmallApp({content, error, change, receivingData, errData, successData, color}) {
  useEffect(()=> {    
    const url = "https://quote-random-machine-backend.herokuapp.com/content/quote";
    receivingData();
    axios.get(url)
    .then((res) => {
      console.log('this is axios', res.data);
      return successData(res.data)

    })
    .catch((err) => {      
      return errData()

    });
     

  }, []);
  

  return (    
    <div className="App" id='quote-box'>
      <Content content={content} error={error} color={color}/>
      <div className="social-change">
          <Social color={color}/>
          <Button change={change} color={color} />
      </div>
      
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    change: () => dispatch(actionChange()),
    receivingData: () => dispatch(receivingData()),
    errData: () => dispatch(errData()),
    successData: (data) => dispatch(successData(data))   
    
    }
  }

const  mapStateToProps = (state) => {
  return {
    content: state.content,
    error: state.error,
    color: state.colors 
  }
}
const App = connect(mapStateToProps, mapDispatchToProps)(SmallApp)
export default App;
