import { Link, useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const data = useLoaderData();
  const {
    title,
    year,
    genre,
    director,
    actors,
    plot,
    posterUrl,
    trailerUrl,
    rating,
    imdbUrl,
  } = data;

  return (
    <div className="max-w-7xl mx-auto my-20">
      <Link to="/">
        <button className="btn btn-neutral">Go Back</button>
      </Link>
      <div className=" flex items-center gap-20">
        <img className="h-[1000px] w-[550px]" src={posterUrl} alt="" />
        <div>
          <h2 className="text-6xl font-bold">
            {title} <span className="text-2xl">({year})</span>
          </h2>
          <h2 className="text-4xl my-3">
            <span className="font-bold text-4xl">Director:</span> {director}
          </h2>
          <p className="text-3xl my-5">
            <span className="font-bold text-4xl">Description:</span> <br />
            {plot}
          </p>
          <p className="text-4xl my-5 font-bold">Actors:</p>
          <div className="grid gap-5 grid-cols-3">
            {actors.map((actor, index) => (
              <div
                key={index}
                className="flex border p-3 rounded-3xl shadow-2xl flex-col items-center"
              >
                {" "}
                <img
                  className="w-32 h-32 rounded-2xl"
                  src={actor.actorPhoto}
                  alt=""
                />
                <h2 className="text-xl text-center">
                  <span className="text-3xl">{actor.name}</span>
                  <br />
                  as {actor.character}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
