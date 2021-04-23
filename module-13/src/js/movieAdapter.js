export const movieAdapter = movie => {
  const {
    original_title: title,
    vote_average: rating,
    poster_path: posterPath,
    overview: description,
  } = movie;

  return {
    title,
    rating,
    description,
    posterPath: `https://www.themoviedb.org/t/p/w500${posterPath}`,
  };
};
