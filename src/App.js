import React from "react";
import "./App.scss";
import audios from "./audios";

import SheetMusicPage from "./pages/SheetMusicPage";
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <div className="App">
      <SheetMusicPage
        audios={audios}
      />
      <PostPage />
    </div>
  );
};

export default App;
