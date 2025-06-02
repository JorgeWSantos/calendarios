import { Box, Dropdown, Footer, Header, SideMenu, TopSideMenu } from '@abqm-ui2/react';
import data from './menu.ts';

import * as S from './styles.ts';

import BoxCard, { type BoxCardProps } from '@components/BoxCard';

import { useAuth } from '../../auth/useAuth.ts';
import { useDeviceType } from '@src/hooks/useDeviceType.ts';
import HeaderMobile from '@src/components/HeaderMobile';

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
  { title: 'Incrições Encerradas', data: dataCards2, variant: 'secondary', type: 'I' },
  { title: 'Incrições Encerradas', data: dataCards2, variant: 'secondary', type: 'I' },
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

function Main() {
  const { user } = useAuth();
  const { isTabletOrMobile } = useDeviceType();

  const heightFactor =
    window.innerHeight <= 800
      ? 0.8
      : window.innerHeight >= 1300
      ? 0.9
      : window.innerHeight >= 900
      ? 0.85
      : 0.8;

  // useEffect(() => {
  //   console.log('login');
  //   login({ email: 'jorgews.dev@gmail.com', password: 'minio20' });
  // }, [login]);

  return (
    <S.Container>
      {!isTabletOrMobile ? (
        <S.Content>
          <S.SideBar>
            <TopSideMenu userName={user?.nome_pessoa} srcImage={user?.foto || ''} />
            <SideMenu data={data} />
          </S.SideBar>

          <S.ContentBar>
            <Header text="Calendários" style={{ flexShrink: 0 }} />
            <Box
              style={{
                padding: '40px 16px 16px',
                maxHeight: `calc(100dvh * ${heightFactor})`,
                overflowY: 'auto',
              }}
            >
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
      ) : (
        <S.MobileLayout>
          {/* <S.MobileHeader /> */}
          <HeaderMobile title="SEQM" page="Calendários" data={data} />

          <S.MobileScroll>
            <Box
              style={{ padding: '40px 16px 16px', maxHeight: '87vh', overflowY: 'auto' }}
            >
              <S.BoxContentMobile>
                {events.map((event, index) => (
                  <BoxCard
                    key={index}
                    title={event.title}
                    data={event.data}
                    variant={event.variant}
                    type={event.type}
                  />
                ))}
              </S.BoxContentMobile>
            </Box>
          </S.MobileScroll>
        </S.MobileLayout>
      )}

      <Footer style={{ flexShrink: 0, zIndex: 2, backdropFilter: 'blur(10px)' }} />
    </S.Container>
  );
}

export default Main;
