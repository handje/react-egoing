import { useParams } from "react-router-dom";
import { contents } from "./contents";
import Topics from "./Topics";
const Topic = () => {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <Topics />
      <h3>{`${id}.${contents[id - 1].title}`}</h3>
      {contents[id - 1].description}
    </>
  );
};

export default Topic;
