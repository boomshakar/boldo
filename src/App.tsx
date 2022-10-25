import React from 'react';
import { About, Aboutv2, Blog, Homepage, Homev2 } from 'pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from 'util/routes';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path={routes.home} element={<Homepage />} />
          <Route path={routes.homev2} element={<Homev2 />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.aboutv2} element={<Aboutv2 />} />
          <Route path={routes.blog} element={<Blog />} />
          <Route path={'*'} element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
