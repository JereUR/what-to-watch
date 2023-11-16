import styled from 'styled-components'
import { useAppSelector } from '../../hooks/store'

export default function Results() {
  const results = useAppSelector((state) => state.results)

  console.log(results)

  return <StyledResults>Results</StyledResults>
}

const StyledResults = styled.div`
  padding: 0 1rem 0 1rem;
  padding-top: 5rem;
  color: var(--header-words);
`
