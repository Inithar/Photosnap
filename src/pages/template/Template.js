import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'styled/components/footer/Footer';
import { Navigation } from 'styled/components/navigation/Navigation';
import { PageWrapper } from 'styled/elements/shared/PageWrapper';

export const Template = () => (
  <PageWrapper>
    <Navigation />
    <Outlet />
    <Footer />
  </PageWrapper>
);
