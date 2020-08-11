import React from 'react';
import MainContainer from './containers/MainContainer';
import Navbar from './components/Navbar';
import Contacto from './containers/Contacto';
import Nosotros from './containers/Nosotros';
import CreateTaskContainer from './containers/CreateTaskContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path = "/" component={MainContainer}></Route>
        <Route exact path = "/contacto" component={Contacto}></Route>
        <Route exact path = "/nosotros" component={Nosotros}></Route>
        <Route exact path = "/crear" component={CreateTaskContainer}></Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
