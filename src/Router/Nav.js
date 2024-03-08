import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
