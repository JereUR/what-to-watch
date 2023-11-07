import styled from 'styled-components'

interface Props {
  key: string
  onClickFunction: () => void
}

export default function AcceptButton({ key, onClickFunction }: Props) {
  return (
    <StyledButton key={key} onClick={onClickFunction}>
      ACCEPT
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: block;
  padding: 10px 20px;
  border-radius: 100px;
  color: var(--header-words);
  border: none;
  background: var(--main-color);
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  transition: 0.5s ease all;
  margin-top: 3rem;
  width: 100%;
  letter-spacing: 0.4rem;

  &:hover {
    transform: scale(1.01);
  }
`
