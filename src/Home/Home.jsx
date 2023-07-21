import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [cardPerPage, setCardPerPage] = useState(5);

  useEffect(() => {
    fetch("http://localhost:5000/allMovies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const lastCardIndex = currentPage * cardPerPage;
  const firstCardIndex = lastCardIndex - cardPerPage;
  const currentMovies = movies.slice(firstCardIndex, lastCardIndex);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-10">Top Movies</h2>
      <div className="grid grid-cols-5 gap-5">
        {currentMovies.map((movie) => (
          <div
            className="border shadow-lg hover:shadow-2xl rounded-2xl flex flex-col h-[650px]"
            key={movie._id}
          >
            <img
              className="h-[350px] rounded-2xl"
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
      <Pagination
        totalCards={movies.length}
        cardPerPage={cardPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={setCardPerPage}
      ></Pagination>
    </div>
  );
};

export default Home;
