const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=b0d938d735b67d7de27f09ccd5ad60cb&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_genres=99`,
  fetchTopRated: `/movie/top_rated?api_key=b0d938d735b67d7de27f09ccd5ad60cb&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_genres=28`,
};
export default requests;
