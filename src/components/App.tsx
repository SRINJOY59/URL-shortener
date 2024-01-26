// import { Home } from './components/Home/Home'
import { Navbar, Home } from ".";
import { Pricing } from "./Pricing/Pricing";
import swirl from "../assets/Swirl.svg";

// import cubes from "./assets/Cubes.svg";
// import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="absolute h-full w-full bg-elite-black -z-40">
      <img src={swirl} className="-z-50 absolute top-0 left-0 h-full w-full" />
      <Navbar />
      <Home />
      <Pricing />
    </div>
  );
}

export default App;
