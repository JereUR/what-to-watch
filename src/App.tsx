import styled from 'styled-components'
import './App.css'
import { Header } from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <MainContainer>
      <Header />
      <Footer />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  max-width: 100%;
  padding: 0;
  background-color: var(--background-color);
`

export default App
