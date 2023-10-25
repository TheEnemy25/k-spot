import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import CinemaTheater from "./pages/cinema-theater-page/CinemaTheater";
import SupportPanel from "./components/navigation-bar/SupportPanel";
import Footer from "./components/footer/Footer";
import Main from "./pages/main-page/Main";

function App() {
  return (
    <Router>
      <Header />
      <SupportPanel />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cinema-theaters" element={<CinemaTheater />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
