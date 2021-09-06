import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./nav.scss";

const Nav = (): JSX.Element => {
  const title = "Planning Poker";
  const links = [
    { name: "Home", link: "/", exact: true },
    { name: "About", link: "/about", exact: false },
    { name: "Components", link: "/test", exact: false },
  ];

  let htmlLinks: JSX.Element[] = [];
  if (Array.isArray(links) && links.length) {
    htmlLinks = links.map((item) => (
      <li className="nav-item" key={`key_${item.link}`}>
        <NavLink exact={item.exact} to={item.link} className="nav-link">
          {item.name}
        </NavLink>
      </li>
    ));
  }

  return (
    <nav
      className={`${classes.navigation} navbar navbar-dark bg-primary navbar-expand-lg`}
    >
      <div className={`${classes.logo} navbar-brand`}>{title}</div>
      <ul className="navbar-nav">{htmlLinks}</ul>
    </nav>
  );
};

export default Nav;
