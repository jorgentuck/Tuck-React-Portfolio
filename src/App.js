import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Container fluid>
          <Row>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/contact' component={Contact} />
              <Route component={Error} />
            </Switch>
          </Row>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
