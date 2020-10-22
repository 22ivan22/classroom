import React from "react";

import store from "./app/store";
import { Provider } from "react-redux";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
