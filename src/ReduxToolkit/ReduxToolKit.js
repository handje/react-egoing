import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import counterSlice from "./counterSlice";

const ReduxToolKit = () => {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
};

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.up(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
};
export default ReduxToolKit;
