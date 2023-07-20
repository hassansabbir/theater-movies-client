import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allMovies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold my-10">Top Movies</h2>
      <div className="grid grid-cols-4 gap-5">
        {movies.map((movie) => (
          <div
            className="border shadow-lg hover:shadow-2xl rounded-2xl flex flex-col h-[730px]"
            key={movie._id}
          >
            <img
              className="h-[450px] w-[350px] rounded-2xl"
              src={movie.posterUrl}
              alt={movie.title}
            />
            <h2 className="text-4xl text-center font-bold my-5">
              {movie.title}
            </h2>
            <h2 className="text-2xl text-center ">Year: {movie.year}</h2>
            <h2 className="text-2xl text-center ">Rating: {movie.rating}</h2>
            <div className="flex-grow"></div>
            <Link to={`/details/${movie._id}`} className="text-center">
              <button className="btn btn-neutral w-11/12 my-5">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
