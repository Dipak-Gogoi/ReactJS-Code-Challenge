import styled from 'styled-components';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <Container data-testid="container">
      <Header />
      <Body />
    </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
`;
