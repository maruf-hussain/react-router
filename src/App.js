import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Friends from './Component/Friends/Friends';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
       <Route path="/home">
       <Home>

       </Home>
       </Route>
       <Route path="/about">
      <About>

      </About>
       </Route>
       <Route path="/friends">
       <Friends>

       </Friends>
       </Route>
       <Route path="*">
      <NotFound>
        
      </NotFound>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
