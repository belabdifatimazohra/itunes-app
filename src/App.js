import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Songs from "./Components/Songs";
import SongCart from "./Components/SongCart";
function App() {
  return (
    <div >
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        {/* Songs page */}
        <Route path="/songs/:search" element={<Songs />} />
        {/* Songs cart */}
        <Route path="/songs/myCart" element={<SongCart />} />
      </Routes>
    </div>
  );
}

export default App;
