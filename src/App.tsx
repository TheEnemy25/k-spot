import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

//Components
import Header from "./components/header/Header";
import SupportPanel from "./components/navigation-bar/SupportPanel";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

//Pages
import CinemaTheater from "./pages/cinema-theater-page/CinemaTheater";
import Main from "./pages/main-page/Main";

import fetchData from "./api-client/fetchData";

function App() {
  useEffect(() => {
    fetchData();
  }, []);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const testBackendConnection = async () => {
  //     try {
  //       const response = await axios.get("https://localhost:5445/api/ping", {
  //         withCredentials: true,
  //       });
  //       console.log("Успішний тестовий запит до бекенду:", response.data);
  //     } catch (error) {
  //       console.error("Помилка тестового запиту до бекенду:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   testBackendConnection();
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     setLoading(false);
  //   });
  // }, []);

  // useEffect(() => {
  //   // Штучна затримка для лоадера
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Затримка на 2 секунди
  // }, []);

  return (
    <Router>
      <Header />
      <SupportPanel />

      {loading ? (
        <Loader />
      ) : (
        <div style={{ marginTop: "80px" }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cinema-theaters" element={<CinemaTheater />} />
          </Routes>
        </div>
      )}

      <Footer />
    </Router>
  );
}

export default App;
