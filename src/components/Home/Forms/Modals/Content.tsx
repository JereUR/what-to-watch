import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  className?: string
}

export default function Content({ children, className }: Props) {
  return (
    <StyledContent className={className ? className : ''}>
      {children}
    </StyledContent>
  )
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`
