import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Stories from './pages/stories';

import './scss/index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
