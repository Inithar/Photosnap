import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Stories from './components/pages/Stories';

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
