import { NavLink } from "react-router-dom";

import { BsChevronLeft } from "react-icons/bs";
import { MdOutlineKeyboardVoice, MdSettings } from "react-icons/md";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <BsChevronLeft />
        </NavLink>
        <div className="collapse navbar-collpase">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link">
                <MdOutlineKeyboardVoice />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">
                <MdSettings />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
