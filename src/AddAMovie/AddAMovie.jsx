import Swal from "sweetalert2";

const AddAMovie = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const director = form.director.value;
    const year = form.year.value;
    const genre = form.genre.value;
    const rating = form.rating.value;
    const posterUrl = form.posterUrl.value;
    const plot = form.plot.value;
    const name = form.name.value;
    const actorPhoto = form.actorPhoto.value;
    const character = form.character.value;
    const actors = [
      { name: name, character: character, actorPhoto: actorPhoto },
    ];
    const newMovie = {
      title,
      director,
      year,
      genre,
      rating,
      posterUrl,
      plot,
      actors,
    };

    fetch("http://localhost:5000/addAMovie", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "New Movie Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-10">Add A Movie</h2>
      <div className="hero">
        <div className="hero-content w-full flex-col ">
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="w-full flex gap-5">
                <div className="form-control w-3/6">
                  <label className="label">
                    <span className="label-text">Movie Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="title"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-3/6">
                  <label className="label">
                    <span className="label-text">Director</span>
                  </label>
                  <input
                    type="text"
                    name="director"
                    placeholder="director"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className="form-control w-3/6">
                  <label className="label">
                    <span className="label-text">Releasing Year</span>
                  </label>
                  <input
                    type="text"
                    name="year"
                    placeholder="year"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-3/6">
                  <label className="label">
                    <span className="label-text">Genre</span>
                  </label>
                  <input
                    type="text"
                    name="genre"
                    placeholder="genre"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className="form-control w-3/6">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="rating"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-3/6">
                  <label className="label">
                    <span className="label-text">Poster Url</span>
                  </label>
                  <input
                    type="text"
                    name="posterUrl"
                    placeholder="posterUrl"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="w-full flex items-center gap-5">
                <h2>Actors:</h2>
                <div className="form-control w-2/6">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-2/6">
                  <label className="label">
                    <span className="label-text">Actor Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="actorPhoto"
                    placeholder="actorPhoto"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-2/6">
                  <label className="label">
                    <span className="label-text">Played Character Name</span>
                  </label>
                  <input
                    type="text"
                    name="character"
                    placeholder="character"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="plot"
                  placeholder="plot"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Movie</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAMovie;
