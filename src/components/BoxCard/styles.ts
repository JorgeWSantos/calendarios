import { Heading } from '@abqm-ui2/react';
import { colors } from '@abqm-ui2/tokens';
import styled, { css } from 'styled-components';
import type { BoxCardsVariants } from '.';

export const BoxContentLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BoxContent = styled.div`
  display: grid;
  grid-template-columns: minmax(8rem, 8.75rem) auto;
`;

export const HeadingContainer = styled.div`
  display: flex;
  /* width: 7.75rem; */
  padding: 1rem 1rem 0rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

interface HeadingTextProps {
  variant: BoxCardsVariants;
}

export const HeadingText = styled(Heading).attrs({
  size: 'md',
  weight: 'bolder',
})<HeadingTextProps>`
  height: 4.125rem;
  max-width: 124px;
  align-self: stretch;
  transform: scaleY(1.2);

  font-size: 1.6rem;

  text-align: right;
  line-height: 90%;
  letter-spacing: -0.06rem;

  color: ${colors.green500};

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: ${colors.white85};
    `}
`;

export const BoxContentRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
