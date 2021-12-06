import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from 'styled-components'
import content from './content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
