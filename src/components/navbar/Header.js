import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { BsChevronLeft } from 'react-icons/bs';
import { MdOutlineKeyboardVoice, MdSettings } from 'react-icons/md';

export default function Header({ children }) {
  return <>{children}</>;
}

export function Homenav() {
  return (
    <nav
      className="navbar navbar-expand navbar-dark fixed-top header"
      data-testid="header"
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <BsChevronLeft className="fs-2" />
          <span>2023</span>
        </NavLink>
        <div className="collapse navbar-collapse">
          <div className="ms-auto">
            <span className="fs-2 text-white">most views</span>
          </div>
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

export function Detailsnav() {
  return (
    <nav
      className="navbar navbar-expand navbar-dark fixed-top header"
      data-testid="header"
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand align-items-center">
          <BsChevronLeft className="fs-2" />
        </NavLink>
        <div className="collapse navbar-collapse">
          <div className="ms-auto">
            <span className="fs-2 text-white">coin/details views</span>
          </div>
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

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
