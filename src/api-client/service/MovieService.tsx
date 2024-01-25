import APIService from '../api/APIService';
import Movie from '../models/movie-models/Movie';
import APIRoutes from '../api/APIRoutes';

const MovieService = {
  getMovies: async () => {
    try {
      const movies = await APIService.get<Movie[]>(`${APIRoutes.getMoviesControllerUrl()}/movies`);
      return movies;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  },

  createMovie: async (movie: Movie) => {
    try {
      if (!movie || !movie.title || !movie.description) {
        throw new Error('Title and description are required for creating a movie.');
      }

      const createdMovie = await APIService.post<Movie>(`${APIRoutes.getMoviesControllerUrl()}/movies`, movie);
      return createdMovie;
    } catch (error) {
      console.error('Error creating movie:', error);
      throw error;
    }
  },
};

export default MovieService;