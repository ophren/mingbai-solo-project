import './App.css';
import Top from './components/top_menu/top.js'
import Content from './components/content/content.js'
import Modal from './components/modal/modal.js'
import ApiService from './apiService/ApiService.js'
import Cs_event from './components/computer_science/Cs_event.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import RenderUnique from './components/render_unique/unique';


function App() {

  const [showModal, setShowModal] = useState(false); 
  const [queriedTerm, setQueriedTerm] = useState('');
  const [descriptions, setDescriptions] = useState([]);


   useEffect (() => {
     ApiService.getDescriptionsForCategory()
       .then(descriptions => setDescriptions(descriptions));
   }, [])


  function createNewDescription (description) {
    ApiService.newDescription({description}) 
      .then(description => {
        setDescriptions(oldDescriptions => [...oldDescriptions, description])
    })
  }


  // Examples of categories
  const cs = {value: "cs", type: "category"}
  // const bio = {value: "bio", type: "category"}

  return (
    <Router>

      <Switch>
        <Route exact path="/"> 
          <div id="test">
            {showModal ? <Modal setShowModal={setShowModal} createNewDescription={createNewDescription}></Modal> : null} 
            <Top setShowModal={setShowModal} ></Top>
            <Content setQueriedTerm = {setQueriedTerm}></Content> 
          </div>
        </Route>

        <Route path="/cs"><Cs_event descriptions = {descriptions} cs = {cs}/></Route>
        
        <Route path="/unique" render={(props) => 
        <RenderUnique location={props.location} descriptions = {descriptions} setDescriptions = {setDescriptions} queriedTerm = {queriedTerm}/> } />
      </Switch>

      
    </Router>
    
  );
}

export default App;
