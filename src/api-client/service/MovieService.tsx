import APIService from '../api/APIService';
import Movie from '../models/movie-models/Movie';
import APIRoutes from '../api/APIRoutes';

const MovieService = {
  getMovies: async (): Promise<Movie[]> => {
    try {
      return await APIService.get<Movie[]>(`${APIRoutes.movieControllerUrl()}/get-all`);
    }
    catch (error) {
      console.error('Error while fetching movies:', error);
      throw error;
    }
  },

  getMovieById: async (movieId: string): Promise<Movie> => {
    try {
      return await APIService.get<Movie>(`${APIRoutes.movieControllerUrl()}/get-by-id`, { id: movieId });
    } catch (error) {
      console.error('Error fetching movie by id:', error);
      throw error;
    }
  },

  createMovie: async (movieData: Omit<Movie, 'id'>): Promise<Movie> => {
    try {
      const newMovie = await APIService.post<Movie>(`${APIRoutes.movieControllerUrl()}/create`, movieData);
      return newMovie;
    } catch (error) {
      console.error('Error creating movie:', error);
      throw error;
    }
  },

  updateMovie: async (movieId: string, movieData: Movie): Promise<Movie> => {
    try {
      return await APIService.put<Movie>(`${APIRoutes.movieControllerUrl()}/put/${movieId}`, movieData);
    } catch (error) {
      console.error('Error updating movie:', error);
      throw error;
    }
  },

  deleteMovie: async (movieId: string): Promise<void> => {
    try {
      await APIService.delete(`${APIRoutes.movieControllerUrl()}/delete?Id=${movieId}`);
    }
    catch (error) {
      console.error('Error deleting movie:', error);
      throw error;
    }
  }
};

export default MovieService;