import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case font-bold text-3xl">Theatero</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-3xl font-bold px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addAMovie">Add Movies</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
