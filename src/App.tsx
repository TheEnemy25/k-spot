import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import MoviePage from "./pages/Movie/Movie";
import CinemaTheaterPage from "./pages/CinemaTheater/CinemaTheater";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/cinema-theaters" element={<CinemaTheaterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
