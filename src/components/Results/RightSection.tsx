import styled from 'styled-components'

import imdbLogo from '../../assets/imdb.png'

interface Props {
  title: string
  description: string
  imDbRating: string
  imDbRatingVotes: string
  genres: string
  plot: string
  stars: string
}

export default function RightSection({
  title,
  description,
  imDbRating,
  imDbRatingVotes,
  genres,
  plot,
  stars
}: Props) {
  return (
    <StyledRightSection>
      <div className="film-info">
        <div className="film-title-info">
          <p className="film-title">
            {title} <i>{description}</i>
          </p>
          <div className="btn-title-div">
            <button
              type="button"
              className="btn-title"
              /* onClick={handleTitle} */
            >
              More info...
            </button>
            <button
              type="button"
              className="btn-title"
              /* onClick={handleIMDB} */
            >
              Go to IMDB...
            </button>
          </div>
        </div>
        <div className="film-calification">
          <img src={imdbLogo} alt="imdb-logo" className="imdb-logo" />
          <p className="calification">
            ⭐{imDbRating} - <i>{imDbRatingVotes} Reviews</i>
          </p>
        </div>
        <p className="film-genre">{genres}</p>
        <i className="film-synopsis">{plot}</i>
        <hr className="hr-results" />
        <p className="film-cast">
          <u>
            <b>Main cast:</b>
          </u>{' '}
          {stars}
        </p>
        <div className="film-trailer">
          <button
            type="button"
            /* onClick={handleTrailer} */
          >
            {'WATCH TRAILER>>>'}
          </button>
        </div>
      </div>
    </StyledRightSection>
  )
}

const StyledRightSection = styled.div`
  position: relative;
  display: flex;
  font-weight: 500;
  color: var(--second-color);
  justify-content: space-around;

  .hr-results {
    opacity: 0.3;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .film-cast {
    font-size: 14px;
    letter-spacing: auto;
  }

  .film-trailer {
    button {
      position: initial;
      border-radius: 5rem;
      border: none;
      padding: 10px;
      width: 70%;
      margin-top: 2rem;
      background-color: transparent;
      box-shadow: 0 0 3px 3px var(--main-color);
      color: var(--main-color);
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      &:hover {
        color: var(--third-color);
        background-color: var(--main-color);
        box-shadow: 0 0 3px 3px var(--third-color);
        transform: scale(1.05);
      }
    }
  }
`
