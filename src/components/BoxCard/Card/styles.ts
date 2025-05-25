import { colors, radii, space } from '@abqm-ui2/tokens';
import styled, { css } from 'styled-components';
import type { BoxCardsTypes, BoxCardsVariants } from '..';
import { Text } from '@abqm-ui2/react';

interface ContainerProps {
  variant: BoxCardsVariants;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  padding: ${space[2]} 0rem ${space[2]} ${space[4]};

  gap: ${space[4]};

  border-left: ${radii.xs} solid ${colors.green500};

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      border-left: ${radii.xs} solid ${colors.white85};
    `}
`;

interface CardProps {
  variant: BoxCardsVariants;
  type: BoxCardsTypes;
}

export const Card = styled.div<CardProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${({ type }) =>
    (type === 'A' || !type) &&
    css`
      width: 21.25rem;
    `}

  ${({ type }) =>
    (type === 'I' || !type) &&
    css`
      width: 18.625rem;
    `}

  min-height: 8.8rem;

  // Prevent child from exceed border of the parent
  overflow: hidden;

  border: ${radii.px} solid ${colors.green500};
  border-radius: ${radii.xs};

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      border: ${radii.px} solid ${colors.emeraldGreen25};
    `}
`;

interface CardLeftProps {
  variant: BoxCardsVariants;
}

export const CardLeft = styled.div<CardLeftProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.green500};

  overflow: hidden;

  padding: ${space[4]} ${space[2]};
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;

  p {
    font-size: 11px;
    color: ${colors.white85};
    font-weight: 600;
    line-height: 0.875rem;
    text-align: center;
  }

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${colors.white50};

      p {
        color: ${colors.green500};
      }
    `}
`;

// =====
// Lives

export const ContainerCardLive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white25};
`;

export const CardLive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 8rem;
  width: 100%;
  padding: 0 ${space[2]};
`;

// ============
// Inscriptions
export const ContainerCardInscriptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: ${space[4]} ${space[2]};

  background-color: ${colors.white25};
`;

export const ContentCardInscriptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const TopCardInscriptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-bottom: ${space[2]};

  width: 100%;

  border-bottom: ${radii.px} solid ${colors.emeraldGreen50};
`;

export const StyledHeading = styled(Text).attrs({
  fontSize: 'smm',
  fontWeight: 'semiBold',
  color: colors.emeraldGreen75,
})``;

export const StyledText = styled(Text).attrs({
  fontSize: 'ssm',
  fontWeight: 'regular',
  color: colors.emeraldGreen75,
})``;

export const BottomCardInscriptions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding-top: ${space[4]};
`;
