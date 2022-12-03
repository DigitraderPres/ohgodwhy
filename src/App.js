import { useState, useEffect } from "react";


import './App.css';
import Nav from './Nav.js';
import './Nav.css';

import Panel   from './pages/Panel';


export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

// export default App;
function App() {

  return (
    <>
    {/* Parent DIV for entire 'app' scrolling experience*/}

    <div className="container" id="sectionContainer">

      {/* router contains 'routing' functionality - page is rendered in Routes
          Here we delcare the NAV bar component
      */}

      <Nav/>
      {/* Persistent end page copyright? */}
      <Panel />

      {/* Call the function to add a library 
    {AddLibrary(
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js')}
  */}
    </div>

  
    </>
  );

}


export default App;

{/* used for transitions - but buggy with parent child relation above
function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      id="sectionContainer "className={`${transitionStage} ' container'`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<ProductDisplay />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}*/}
