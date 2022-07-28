import { Route, Routes } from 'react-router-dom';
import GlobalStyle from 'styled/base/GlobalStyle';
import { Home } from 'pages/home/Home';
import { Stories } from 'pages/stories/Stories';
import { Features } from 'pages/features/Features';
import { Pricing } from 'pages/pricing/Pricing';
import { Template } from 'pages/template/Template';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />} />
          <Route path="stories" element={<Stories />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
