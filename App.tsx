import React from 'react';
import { Navigation } from "./src/navigation";
import { Provider } from "react-redux";

import store from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>

  );
}
