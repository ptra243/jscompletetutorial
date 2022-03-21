import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tutorial from './Components/Tutorial/Tutorial';
import reportWebVitals from './reportWebVitals';
import './Components/Tutorial/Tutorial.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ResponsiveAppBar from './Components/Base/ResponsiveAppBar';
import { Container } from '@mui/material';
import GithubCardsApp from './Components/GithubCards/GithubCardsApp';


ReactDOM.render(
  <React.StrictMode>

    <Router>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Tutorial />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/GithubCards" element={<GithubCardsApp />} />
        </Routes>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
