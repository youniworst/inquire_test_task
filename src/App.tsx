import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./core/store/store";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
};

export default App;
