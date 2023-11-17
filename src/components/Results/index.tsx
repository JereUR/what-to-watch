import styled from 'styled-components'
import { useAppSelector } from '../../hooks/store'
import Item from './Item'

export default function Results() {
  const results = useAppSelector((state) => state.results)

  return (
    <StyledResults>
      {results.data.length > 0 ? (
        results.data.map((item, index) => (
          <Item item={item} index={index + 1} />
        ))
      ) : (
        <div className="no-data">
          <hr />
          <h1>No Matches</h1>
        </div>
      )}
    </StyledResults>
  )
}

const StyledResults = styled.div`
  padding: 0 1rem 0 1rem;
  padding-top: 5rem;
  color: var(--header-words);

  .no-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -3rem;

    hr {
      margin-bottom: 3rem;
    }

    h1 {
      color: var(--header-words);
      text-align: center;
      font-size: 3rem;
      font-weight: bold;
    }
  }
`
