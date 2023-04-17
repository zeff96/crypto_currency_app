import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="navbar-brand"></NavLink>
        <div className="collapse navbar-collpase">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
