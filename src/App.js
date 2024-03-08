import Nav from "./Nav";
import BoxContext from "./BoxContext";
import Reducer from "./Reducer";
import ReduxEx from "./ReduxEx";

function App() {
  return (
    <div className="App">
      <Nav />
      <h2>Home</h2>Home,,,
      <hr />
      <h3>context api example</h3>
      <BoxContext />
      <hr />
      <h3>useReducer example</h3>
      <Reducer />
      <hr />
      <h3>Redux example</h3>
      <ReduxEx />
    </div>
  );
}

export default App;
