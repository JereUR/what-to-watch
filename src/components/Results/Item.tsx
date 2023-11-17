import styled from 'styled-components'

import { ResultItemProps } from '../../store/results/slice'
import RightSection from './RightSection'

export default function Item({ item, index }: ResultItemProps) {
  const {
    description,
    genres,
    id,
    image,
    imDbRating,
    imDbRatingVotes,
    plot,
    stars,
    title
  } = item
  return (
    <StyledItem key={id}>
      <div className="film-section-1">
        <div className="film-index">
          <p>#{index}</p>
        </div>
        <div className="film-image">
          <img src={image} alt="film-img" className="film-img" />
        </div>
      </div>
      <RightSection
        description={description}
        genres={genres}
        imDbRating={imDbRating}
        imDbRatingVotes={imDbRatingVotes}
        plot={plot}
        stars={stars}
        title={title}
      />
    </StyledItem>
  )
}

const StyledItem = styled.div`
  display: flex;
  margin: 5px;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  color: var(--words-color);
  font-size: 1rem;
  max-width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--words-color);

  .film-section-1 {
    position: relative;
    display: flex;
    margin: 10px;
    font-weight: 500;

    .film-index {
      position: absolute;
      font-size: 26px;
      font-weight: bold;
      padding: 0.5rem;
      color: var(--main-color);
    }

    .film-image {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 30vh;
        margin: 0.5rem;
        height: auto;
        padding-right: 1rem;
      }
    }
  }
`
