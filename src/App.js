import React from "react";
import "./App.scss";
import audios from "./audios";

import SheetMusicPage from "./pages/SheetMusicPage";

const App = () => {
  return (
    <div className="App">
      <SheetMusicPage
        audios={audios}
      />
    </div>
  );
};

export default App;
