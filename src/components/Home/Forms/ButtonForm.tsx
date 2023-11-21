import styled from 'styled-components'

interface Button {
  onClickFunction: () => void
  icon: JSX.Element
  text: string
}

export default function ButtonForm({ onClickFunction, icon, text }: Button) {
  return (
    <StyledButton type="button" onClick={onClickFunction}>
      {icon} {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 100vh;
  display: block;
  padding: 20px 30px;
  border-radius: 100px;
  color: var(--main-color);
  border: none;
  background: transparent;
  box-shadow: 0 0 3px 3px var(--main-color);
  cursor: pointer;
  font-family: var(--main-font);
  font-size: 24px;
  letter-spacing: 0.3rem;
  font-weight: 800;
  transition: 0.5s ease all;
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;

  &:hover {
    color: var(--third-color);
    box-shadow: 0 0 3px 3px var(--third-color);
    transform: scale(1.03);
  }

  i {
    font-size: 28px;
  }

  svg {
    width: auto;
    height: 22px;
  }
`
