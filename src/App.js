import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Discover from "./pages/Discover";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import SingleM from "./pages/SingleM";
import Not from "./pages/Not";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/discover/:page" element={<Discover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<SingleM />} />
        <Route path="*" element={<Not />} />
      </Routes>
    </div>
  );
}

export default App;
