import React from 'react';
import './App.css';
import Contact from './components/contacts/Contact';
import Header from './components/layout/Header';
import {Provider} from './context'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './components/contacts/Contacts';
import './components/contacts/AddContact'
import AddContact from './components/contacts/AddContact';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Abouts from './About';
import Notfound from './pages/Notfound';
import Test from './components/test/Test';
import EditContact from './components/contacts/EditContact';

function App() {
  return (
    <Provider>
   <Router>
   <div className="App">
     <Header name="Bishworaj"/>
    <div className="container">
      <Switch>
        <Route exact path="/" component = {Contacts}/>
        <Route exact path="/contact/add" component = {AddContact}/>
        <Route exact path="/about" component = {Abouts}/>
        <Route exact path="/test" component = {Test}/>
        <Route exact path="/contact/edit/:id" component = {EditContact}/>
        <Route component ={Notfound}/>   
        
      </Switch>
    </div>
    </div>
   </Router>
    </Provider>
  );
}

export default App;
