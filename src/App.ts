import { Text } from '@abqm-ui2/react';
import { colors, space } from '@abqm-ui2/tokens';
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
  max-height: 100%;
  padding: ${space[4]} 0 0 0;
  grid-template-columns: 13.5rem 1fr;
  gap: 1rem;
`;

export const SideBar = styled.div`
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentBar = styled.div`
  display: flex;
  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxContent = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 240px);
  height: 100%;
  width: 100%;
`;

export const BoxContentLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${space[10]};
`;

export const BoxContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  height: 100%;
  padding: 0.5rem 0rem 0.5rem 1rem;
  gap: 1rem;

  border-left: 1px solid ${colors.emeraldGreen25};
`;

export const TextBoxRight = styled(Text).attrs({
  fontSize: 'lg',
  fontWeight: 'semiBold',
  color: colors.emeraldGreen75,
})``;
