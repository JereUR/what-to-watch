import styled from 'styled-components'
import './App.css'
import { Header } from './components/Header'

function App() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  max-width: 100%;
  padding: 0;
`

export default App
