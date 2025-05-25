import type { ReactNode } from 'react';
import { ButtonIconContainer } from './styles';
import { colors } from '@abqm-ui2/tokens';
import { Text } from '@abqm-ui2/react';

interface ButtonIconProps {
  children: ReactNode;
  text: string;
}

const ButtonIcon = ({ children, text }: ButtonIconProps) => {
  return (
    <ButtonIconContainer>
      {children}
      <Text fontSize="xxs" color={colors.green900} fontWeight="regular">
        {text}
      </Text>
    </ButtonIconContainer>
  );
};

export default ButtonIcon;
