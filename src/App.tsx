import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Header from "./components/header/Header";
import SupportPanel from "./components/navigation-bar/SupportPanel";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

//Pages
import Main from "./pages/main-page/Main";
import CinemaTheater from "./pages/cinema-theater-page/CinemaTheater";

import ActorsPage from './pages/actor-pages/actors-page/ActorsPage';
import ActorFormPage from './pages/actor-pages/actor-form-page/ActorFormPage';
import ActorPage from './pages/actor-pages/actor-page/ActorPage';
import { useState } from "react";
import Actor from "./api-client/models/actor-models/Actor";

function App() {
  const [createdActor, setCreatedActor] = useState<Actor | null>(null);


  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <SupportPanel />
        <div style={{ marginTop: "80px", flex: '1 1 auto' }}>
          <Routes >
            <Route path="/" element={<Main />} />
            <Route path="/cinema-theaters" element={<CinemaTheater />} />

            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/actor/:actorId" element={<ActorPage />} />
            <Route path="/actor/create" element={<ActorFormPage onActorCreated={setCreatedActor} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;