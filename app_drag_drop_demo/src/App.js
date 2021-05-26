import React from 'react';
import { Container } from 'reactstrap';
import { NavBar } from './components/NavBar/NavBar';
import { GameTabs } from './components/GameTabs/GameTabs.jsx';
import './App.css';

function App() {
  return (
    <Container>
      <NavBar>
      </NavBar>
      <GameTabs>

      </GameTabs>
    </Container>
  );
}

export default App;
