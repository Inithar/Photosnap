import { useGetDevice } from 'hooks/useGetDevice';
import React from 'react';
import { Header } from 'styled/elements/pricing/compare/Header';
import { TableHeadContainer } from 'styled/elements/pricing/compare/TableHeadContainer';
import { TableHeadTypesContainer } from 'styled/elements/pricing/compare/TableHeadTypesContainer';

export const CompareTableHead = () => (
  <TableHeadContainer>
    <Header marginLeft="24px">The features</Header>
    {useGetDevice() === 'mobile' ? null : (
      <TableHeadTypesContainer>
        <Header width="33.3%" align="center">
          Basic
        </Header>
        <Header width="33.3%" align="center">
          Pro
        </Header>
        <Header width="33.3%" align="center">
          Business
        </Header>
      </TableHeadTypesContainer>
    )}
  </TableHeadContainer>
);
