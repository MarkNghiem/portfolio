// App Container

import NavBar from "./components/NavBar";
import AboutContainer from "./containers/AboutContainer";

const App = () => {
  return (
    <div
      id="app"
      className="bg-gradient-to-br from-amber-300/30 from-10% via-slate-300/20 via-60% to-red-300/20 to-90% text-center text-slate-700"
    >
      <NavBar />
      <AboutContainer />
    </div>
  );
};

export default App;
