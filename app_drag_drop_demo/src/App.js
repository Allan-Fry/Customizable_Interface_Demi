//*https://codepen.io/pigabo/pen/eAiLF*/

import React, { useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from 'reactstrap';
import { NavBar } from './components/NavBar/NavBar';
import './App.css';
import { editPage } from './pages/editPage/editPage';

function App() {
  
  return (
    <Container>
       <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
   <defs>
      <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"/>
      </pattern>
      <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
        <rect width="100" height="100" fill="url(#smallGrid)"/>
        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>

      <Router>
        <NavBar>
        </NavBar>
        <Switch>
         
         <Route path="/join">
           <div>Join</div>
         </Route>
         <Route path="/account">
           <div>Account</div>
         </Route>
         <Route path="/" component={editPage}>
          
         </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
