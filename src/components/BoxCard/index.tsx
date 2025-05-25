import Cards, { type CardsData } from './Card';
import * as S from './styles';

export type BoxCardsVariants = 'primary' | 'secondary' | 'tertiary';

// A: Ao Vivo, I: Inscrições Abertas, E: Eventos Encerrados
export type BoxCardsTypes = 'A' | 'I' | 'E';

export interface BoxCardProps {
  title: string;
  data: CardsData[];
  variant: BoxCardsVariants;
  type: BoxCardsTypes;
}

const BoxCard = ({ title, variant, ...rest }: BoxCardProps) => {
  return (
    <S.BoxContent>
      <S.HeadingContainer>
        <S.HeadingText variant={variant}>{title}</S.HeadingText>
      </S.HeadingContainer>

      <Cards variant={variant} {...rest} />
    </S.BoxContent>
  );
};

export default BoxCard;
