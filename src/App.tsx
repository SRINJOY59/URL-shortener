// import { Home } from './components/Home/Home'
import { Navbar } from "./components/Navbar/Navbar";
// import cubes from "./assets/Cubes.svg";
import swirl from "./assets/Swirl.svg";

function App() {
  return (
    <>
      <div className="relative top-0 left-0">
        <Navbar />
        <img
          src={swirl}
          className="-z-50 absolute top-0 left-0 bg-elite-black"
        />
        {/* <img src={cubes} className="-z-20 absolute top-0 left-0" /> */}

        <div className="justify-self-center text-center justify-center center content-center w-full pt-[100px]">
          <div className="justify-self-center text-center justify-center center content-center">
            <p className="text-[50px] text-transparent pt-[80px] bg-gradient-to-r from-bright-pink to-bright-blue bg-clip-text font-bold justify-center z-50 center">
              Shorten Your Loooong Links :)
            </p>
          </div>
          <p className="text-[15px] text-lite-gray pt-[4px] justify-center z-50 center pb-[30px]">
            An efficient and easy-to-use URL Shortening service that streamlines
            your online experience.
          </p>

          <input
            className="shadow border-[4px] border-gray-700 rounded-full py-4 w-[600px] py-2 px-3 text-lite-gray bg-dark-gray focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter the link here"
          ></input>
          <button className="bg-bright-blue h-[50px] w-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full -ml-[157px]">
            Shorten Now!
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
