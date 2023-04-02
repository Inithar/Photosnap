import './scss/index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/templates/Layout';
import Home from './components/pages/Home';
import Stories from './components/pages/Stories';
import Features from './components/pages/Features';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="stories" element={<Stories />} />
        <Route path="features" element={<Features />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
