import { Box, Dropdown, Footer, Header, SideMenu, TopSideMenu } from '@abqm-ui2/react';
import data from './menu.ts';

import * as S from './App.ts';
import BoxCard, { type BoxCardProps } from './components/BoxCard/index.tsx';

const dataCards = [
  {
    id: 1,
    src: 'https://avatars.githubusercontent.com/u/36779335?v=4',
    text: '22º POTRO DO FUTURO E 22º CAMPEONATO NACIONAL ABQM DE VAQUEJADA 2024',
    alt: '22º POTRO DO FUTURO E 22º CAMPEONATO NACIONAL ABQM DE VAQUEJADA 2024',
    type: 'A',
  },
  {
    id: 2,
    src: 'https://avatars.githubusercontent.com/u/36779335?v=4',
    text: '22º POTRO DO FUTURO E 22º CAMPEONATO NACIONAL ABQM DE VAQUEJADA 2024',
    alt: '22º POTRO DO FUTURO E 22º CAMPEONATO NACIONAL ABQM DE VAQUEJADA 2024',
    type: 'I',
  },
];

const dataCards2 = [
  {
    id: 1,
    src: 'https://avatars.githubusercontent.com/u/99362684?v=4',
    text: '3ª COPA DE RANCH SORTING FERRADURA DE OURO - 1ª ETAPA',
    alt: '3ª COPA DE RANCH SORTING FERRADURA DE OURO - 1ª ETAPA',
  },
  {
    id: 2,
    src: 'https://avatars.githubusercontent.com/u/99362684?v=4',
    text: '3ª COPA DE RANCH SORTING FERRADURA DE OURO - 1ª ETAPA',
    alt: '3ª COPA DE RANCH SORTING FERRADURA DE OURO - 1ª ETAPA',
  },
];

const events: BoxCardProps[] = [
  { title: 'Eventos ao vivo', data: dataCards, variant: 'primary', type: 'A' },
  { title: 'Incrições abertas', data: dataCards2, variant: 'secondary', type: 'I' },
] as const;

interface DataDropdown {
  value: string;
  label: string;
  id: string;
}

const optionsDropdown: DataDropdown[] = [
  { value: 'sp', label: 'São Paulo', id: '0' },
  { value: 'rj', label: 'Rj', id: '1' },
  { value: 'spsp', label: 'Sp', id: '1' },
];

function App() {
  return (
    <S.Container>
      <S.Content>
        <S.SideBar>
          <TopSideMenu
            userName="Jorge Santos"
            srcImage="https://avatars.githubusercontent.com/u/36779335?v=4"
          />
          <SideMenu data={data} />
        </S.SideBar>
        <S.ContentBar>
          <Header text="Calendários" />
          <Box style={{ padding: '40px 16px 16px' }}>
            <S.BoxContent>
              <S.BoxContentLeft>
                {events.map((event, index) => (
                  <BoxCard
                    key={index}
                    title={event.title}
                    data={event.data}
                    variant={event.variant}
                    type={event.type}
                  />
                ))}
              </S.BoxContentLeft>

              <S.BoxContentRight>
                <S.TextBoxRight>Filtro</S.TextBoxRight>
                <Dropdown data={optionsDropdown} label="Modalidade" />
                <Dropdown data={optionsDropdown} label="Estado" />
              </S.BoxContentRight>
            </S.BoxContent>
          </Box>
        </S.ContentBar>
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default App;
