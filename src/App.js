import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SheetMusicPage from "./pages/SheetMusicPage";
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={SheetMusicPage} />
      <Route exact path="/posts" component={PostPage} />
    </Router>
  );
};

export default App;
