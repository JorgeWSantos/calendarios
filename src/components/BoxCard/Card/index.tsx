import { AwardFillIcon, BroadcastIcon, ListOlIcon, StarIcon } from '@abqm-ui2/icons';
import {
  Card,
  CardLive,
  CardLeft,
  Container,
  ContentCardInscriptions,
  ContainerCardLive,
  ContainerCardInscriptions,
  TopCardInscriptions,
  BottomCardInscriptions,
  StyledHeading,
  StyledText,
} from './styles.ts';
import type { BoxCardsTypes, BoxCardsVariants } from '../index.tsx';
import ButtonIcon from '../ButtonIcon/index.tsx';

export interface CardsData {
  src: string;
  alt: string;
  text: string;
  id: number;
}

interface CardsProps {
  data: CardsData[];
  variant: BoxCardsVariants;
  type: BoxCardsTypes;
}

const CardLivesComponent = () => (
  <ContainerCardLive>
    <CardLive>
      <ButtonIcon text="Acompanhar ao VIVO">
        <BroadcastIcon />
      </ButtonIcon>
      <ButtonIcon text="Ordens de Entrada">
        <ListOlIcon />
      </ButtonIcon>
      <ButtonIcon text="Resultados">
        <AwardFillIcon />
      </ButtonIcon>
      <ButtonIcon text="Participações">
        <StarIcon />
      </ButtonIcon>
    </CardLive>
  </ContainerCardLive>
);

const CardInscriptionsComponent = () => (
  <ContainerCardInscriptions>
    <ContentCardInscriptions>
      <TopCardInscriptions>
        <StyledHeading>22 NOV</StyledHeading>
        <StyledText>2024</StyledText>
      </TopCardInscriptions>

      <BottomCardInscriptions>
        <ButtonIcon text="Inscrições">
          <StarIcon />
        </ButtonIcon>
        <ButtonIcon text="Participações">
          <StarIcon />
        </ButtonIcon>
      </BottomCardInscriptions>
    </ContentCardInscriptions>
  </ContainerCardInscriptions>
);

export const Cards = ({ data, variant, type }: CardsProps) => {
  return (
    <Container variant={variant}>
      {data.map((item) => {
        return (
          <Card key={item.id} variant={variant} type={type}>
            <CardLeft variant={variant}>
              <img src={item.src} alt={item.alt} width={64} height={64} />
              <p>{item.text}</p>
            </CardLeft>

            {type === 'A' && CardLivesComponent()}

            {type === 'I' && CardInscriptionsComponent()}
          </Card>
        );
      })}
    </Container>
  );
};

export default Cards;
