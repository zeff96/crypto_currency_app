import { NavLink } from "react-router-dom";

import { BsChevronLeft } from "react-icons/bs";
import { MdOutlineKeyboardVoice, MdSettings } from "react-icons/md";

export default function Header() {
  return (
    <nav className="navbar navbar-expand navbar-dark text-pink fixed-top z-2">
      <div className="container">
        <NavLink to="/" className="navbar-brand fs-2">
          <BsChevronLeft />
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link fs-2">
                <MdOutlineKeyboardVoice />
              </NavLink>
            </li>
            <li className="nav-item ms-3">
              <NavLink className="nav-link fs-2">
                <MdSettings />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
