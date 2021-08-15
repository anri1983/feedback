import Feedbacks from "../Feedbacks/Feedbacks";
import Home from '../Home/Home';
import { useState } from "react";
import Todos from "../Todos/Todos";
import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {ThemeContext} from '../utils/ThemeContext';
  import config from '../utils/config';
  import Footer from '../Footer/Footer';
  import Counter from "../Counter/Counter";


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
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/feedbacks">Feedbacks</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
            </ul>
          </nav>
          <div className = {styles.theme}>
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
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/counter">
              <Counter />
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
