import { Route, Routes } from 'react-router-dom';
import GlobalStyle from 'styled/base/GlobalStyle';
import { Navigation } from 'styled/components/Navigation/Navigation';
import { Home } from 'pages/home/Home';
import { PageWrapper } from 'styled/elements/Shared/PageWrapper';
import { Stories } from 'pages/stories/Stories';
import { Features } from 'pages/features/Features';
import { Pricing } from 'pages/pricing/Pricing';

function App() {
  return (
    <PageWrapper>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="stories" element={<Stories />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </PageWrapper>
  );
}

export default App;
