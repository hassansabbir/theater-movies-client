import "./Pagination.css";

const Pagination = ({
  totalCards,
  cardPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="text-center my-10 pagination">
      {pages.map((page, i) => {
        return (
          <button
            className={`btn ${page == currentPage ? "active" : ""} mx-2`}
            key={i}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
