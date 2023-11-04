import styled from 'styled-components'
import film from '../../assets/cine-logo.jpg'

export const Header = () => {
  return (
    <HeaderStyled className="header">
      <HeaderContent>
        <img src={film} alt="film" />
        <h1>What To Watch </h1>
        <p>Find something new to watch...</p>
      </HeaderContent>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  top: 0;
  z-index: 3;
  padding: 40px;
  width: 100%;
  background-color: var(--background-color);
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  color: var(--header-words);
  text-align: center;

  h1 {
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 5px;
    margin: 30px auto 10px auto;
  }

  p {
    font-size: 24px;
    font-style: italic;
    margin: 5px;
  }

  img {
    position: absolute;
    left: 50px;
    width: 200px;
  }
`
