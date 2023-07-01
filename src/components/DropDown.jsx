import React, { useState } from 'react';

const DropDown = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleMouseEnter = () => {
    setDropdownActive(true);
  };

  const handleMouseLeave = () => {
    setDropdownActive(false);
  };

  return (
    <>
      <div
        className="nav-link dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a className="dropdown-toggle" href="#" role="button" aria-expanded={dropdownActive ? 'true' : 'false'}>
          Dropdown
        </a>
        <ul className={`dropdown-menu ${dropdownActive ? 'show' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <li>
          <div
        className="nav-link dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a className="dropdown-toggle" href="#" role="button" aria-expanded={dropdownActive ? 'true' : 'false'}>
          Dropdown
        </a>
        <ul className={`dropdown-menu ${dropdownActive ? 'show' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
