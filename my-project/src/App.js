import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="h-full p-2">
        <nav className="h-20 bg-blue-300 "></nav>
        <div className=" grid grid-cols-12 grid-rows-6 h-screen  gap-2 py-2 ">
          <div className="col-span-4 row-span-2 bg-green-300"></div>
          <div className="col-span-8 row-span-5 bg-yellow-300"></div>
          <div className="col-span-4 row-span-4 bg-red-400"></div>
          <div className="col-span-8 row-span-1 bg-emerald-400"></div>
        </div>
        <div className="grid grid-cols-12  h-20 gap-2  py-2">
          <div className="col-span-8  bg-red-300"></div>
          <div className="col-span-4  bg-fuchsia-300"></div>
        </div>
        <footer className="bg-blue-500 h-20"></footer>
      </div>
    </>
  );
}

export default App;
