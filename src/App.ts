import { space } from '@abqm-ui2/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 0 ${space[5]};
  max-width: 100rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 13.5rem 1fr;
`;

export const SideBar = styled.div`
  padding: ${space[10]} ${space[5]} 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${space[10]} 0 ${space[5]} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemMenu = styled.select`
  width: 200px;
  height: 34px;
  background-color: blue;
  border: 1px solid black;
`;
