import Feedbacks from "../Feedbacks/Feedbacks";
import Home from '../Home/Home';
import { useState } from "react";
import Todos from "../Todos/Todos";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
  import {ThemeContext} from '../utils/ThemeContext';
  import config from '../utils/config';
  import Footer from '../Footer/Footer';
  import Counter from "../Counter/function/Counter/Counter";
  import CounterViaContext from "../Counter/function/CounterViaContext/Counter/CounterViaContext";
  import CounterViaUseState from "../Counter/function/CounterViaState/Counter/CounterViaUseState";
  import CounterViaClass from "../Counter/class/CounterViaClass/Counter/CounterViaClass";
  import CounterContextViaClass from "../Counter/class/CounterViaContextClass/Counter/CounterViaContext";
  import Todo from "../Todo/Todo";
  import { getById } from '../data/todos';


  function App() {
    const [theme, setTheme] = useState(config.defaultTheme);

    const changeTheme = (value) => {
      setTheme(value);
    }
  
    document.body.className = theme;
    return (
      <ThemeContext.Provider value = {theme}>
      <Router>
        <div>
          <nav className = 'navList'>
            <ul className = "list" >
              <li>
                <NavLink to="/home" activeClassName="selected" >Home</NavLink>
              </li>
              <li>
                <NavLink to="/feedbacks" activeClassName="selected">Feedbacks</NavLink>
              </li>
              <li>
                <NavLink to="/todos" activeClassName="selected">Todos</NavLink>
              </li>
              <li>
                <NavLink to="/counter" activeClassName="selected">Counter</NavLink>
              </li>
              <li>
                <NavLink to="/counterViaContext" activeClassName="selected">Counter Via Context</NavLink>
              </li>
              <li>
                <NavLink to="/counterViaUseState" activeClassName="selected">Counter Via UseState</NavLink>
              </li>
              <li>
                <NavLink to="/counterViaClass" activeClassName="selected">Counter Via Class</NavLink>
              </li>
              <li>
                <NavLink to="/counterContextViaClass" activeClassName="selected">CounterViaContextClass</NavLink>
              </li>
            </ul>
          </nav>
          <div className = "theme">
          <Link to ='#' onClick={() => changeTheme('light1')} >Light</Link><span> &#9672; </span>
          <Link to ='#' onClick={() => changeTheme('dark1')} >Dark</Link>
          </div>
          <footer><Footer/></footer>
          
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/feedbacks">
              <Feedbacks />
            </Route>
            <Route exact path="/todos">
              <Todos />
            </Route>
            <Route path="/todos/:todo">
              <Todo getById = {getById} />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/counterViaContext">
              <CounterViaContext />
            </Route>
            <Route path="/counterViaUseState">
              <CounterViaUseState />
            </Route>
            <Route path="/counterViaClass">
              <CounterViaClass />
            </Route>
            <Route path="/counterContextViaClass">
              <CounterContextViaClass />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      </ThemeContext.Provider>
    );
  }

export default App;
