import MovieCard from "./MovieCard";

const PopularMovie = ({ movies }) => {

  return (
    <div className="bg-gray-700 container max-w-7xl mx-auto pd-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">Top trending</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovie;
