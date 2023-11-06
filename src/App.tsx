import styled from 'styled-components'
import './App.css'

import Footer from './components/Footer'
import Home from './components/Home'
import Header from './components/Header'

function App() {
  return (
    <MainContainer>
      <Header />
      <Home />
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
