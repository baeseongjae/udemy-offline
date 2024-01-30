import { React, useState, useEffect } from "react";

import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="app">
      <Counter />

      <hr />

      {/* <Timer /> */}

      <hr />

      <Posts />
    </div>
  );
}

export default App;
