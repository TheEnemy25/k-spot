import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Header from "./components/header/Header";
import SupportPanel from "./components/navigation-bar/SupportPanel";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

//Pages
import Main from "./pages/main-page/Main";
import CinemaTheater from "./pages/cinema-theater-page/CinemaTheater";

import ActorFormPage from './pages/actor-pages/actor-form-page/ActorFormPage';
import ActorsPage from './pages/actor-pages/actors-page/ActorsPage';
import ActorPage from './pages/actor-pages/actor-page/ActorPage';
import Actor from "./api-client/models/actor-models/Actor";

import MovieFormPage from './pages/movie-page/movie-form-page/MovieFormPage';
import MoviePage from './pages/movie-page/movie-page/MoviePage';
import MoviesPage from "./pages/movie-page/movies-page/MoviesPage";
import MoviesAdminPage from './pages/movie-page/movies-admin-page/MoviesAdminPage';
import Movie from "./api-client/models/movie-models/Movie";

import { useState } from "react";

import styles from "./index.module.scss";


function App() {
  const [createdActor, setCreatedActor] = useState<Actor | null>(null);
  const [createdMovie, setCreatedMovie] = useState<Movie | null>(null);



  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
        <Header />
        <SupportPanel />

        <main className={styles.wrapper}>
          <Routes >
            <Route path="/" element={<Main />} />
            <Route path="/cinema-theaters" element={<CinemaTheater />} />

            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/actor/:actorId" element={<ActorPage />} />
            <Route path="/actor/create" element={<ActorFormPage onActorCreated={setCreatedActor} />} />

            <Route path="/admin/movies" element={<MoviesAdminPage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
            <Route path="/movie/create" element={<MovieFormPage onMovieCreated={setCreatedMovie} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;