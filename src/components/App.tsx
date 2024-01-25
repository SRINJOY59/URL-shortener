// import { Home } from './components/Home/Home'
import { Navbar, Home } from '.';
// import cubes from "./assets/Cubes.svg";
// import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
      <div className="absolute h-full w-full bg-elite-black -z-40">
        <Navbar />
        <Home />
      </div>
  );
}

export default App;
