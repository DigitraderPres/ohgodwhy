import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import ProductDisplay from './ProductDisplay'
import About  from './pages/about';
import SignUp from './pages/signup';
import Funds  from './pages/funds'



import ScrollToTop from './hooks/scrollToTop';

function Nav() {
  return (
      <Router>
       <ScrollToTop/>
            <nav className="navBarBottom">
              <ul>
                <li>
                  <Link className="no_highlights" to="/">🏡</Link>
                </li>
                <li>
                  {/* <span id="navBadge"> 420 </span> */}
                  <Link className="no_highlights" digi-count='420' to="/funds">💎</Link>
                </li>
                <li>
                  <Link className="no_highlights" to="/">🍿</Link>
                </li>
                <li> 
                  <Link className="no_highlights" to="/about">💬</Link>
                </li>
                <li>
                  <Link className="no_highlights" to="/signup">🔓</Link>
                </li>
              </ul>
            </nav>

            {/* A <Routes> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
     
            <Routes>
              <Route path='/about' element={<About />}>
              </Route>
              <Route path='/funds' element={<Funds/>}>
              </Route>
              <Route path='/signup' element={<SignUp/>}>
              </Route>
              <Route path='' element={<ProductDisplay />}>
              </Route>
            </Routes>
        </Router>  
  );
}

export default Nav;
