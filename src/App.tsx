import { Container, Content, ContentBar, SideBar } from './App';
import { Box, Footer, Header } from '@abqm-ui2/react';
import { SideMenu } from './components/SideMenu'; // ajuste o caminho conforme necessário
import data from './menu.ts';

function App() {
  return (
    <Container>
      <Content>
        <SideBar>
          <SideMenu data={data} />
        </SideBar>
        <ContentBar>
          <Header text="Calendários" />
          <Box />
        </ContentBar>
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
