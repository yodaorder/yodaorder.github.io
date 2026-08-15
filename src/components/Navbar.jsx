import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <h2>Riftline Esports</h2>
        </Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/members">Members</Link>
        <Link to="/partnerships">Partnerships</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;