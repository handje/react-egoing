import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import { contents } from "./contents";

const Topics = () => {
  return (
    <>
      <Nav />
      <h2>Topics</h2>
      <ul>
        {contents.map(({ id, title }) => {
          return (
            <li>
              <NavLink key={id} to={`/topics/${id}`}>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Topics;
