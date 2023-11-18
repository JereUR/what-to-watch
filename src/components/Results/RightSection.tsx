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
          <div className="title-section">
            <p className="film-title">
              {title} <i>{description}</i>
            </p>
            <p className="film-genre">{genres}</p>
          </div>

          <div className="btn-title-div">
            <button
              type="button"
              /* onClick={handleTitle} */
            >
              More info...
            </button>
            <button
              type="button"
              /* onClick={handleIMDB} */
            >
              Go to IMDB...
            </button>
          </div>
        </div>
        <div className="film-calification">
          <img src={imdbLogo} alt="imdb-logo" />
          <p>
            ⭐{imDbRating} - <i>{imDbRatingVotes} Reviews</i>
          </p>
        </div>
        <div className="plot-section">
          <i>{plot}</i>
        </div>
        <hr />
        <div className="cast-section">
          <p>
            <u>
              <b>Main cast:</b>
            </u>{' '}
            {stars}
          </p>
        </div>

        <div className="film-trailer">
          <button
            type="button"
            /* onClick={handleTrailer} */
          >
            WATCH TRAILER
          </button>
        </div>
      </div>
    </StyledRightSection>
  )
}

const StyledRightSection = styled.div`
  font-weight: 500;
  color: var(--main-color);

  .film-title-info {
    display: flex;
    justify-content: space-between;
    line-height: 10px;

    .title-section {
      display: block;
      text-align: start;
      .film-title {
        font-size: 32px;
      }

      .film-genre {
        margin-left: 10px;
        font-style: italic;
        font-size: 16px;
        color: var(--second-color);
      }
    }
  }

  .film-calification {
    display: flex;
    justify-content: start;
    margin: 30px 10px;
    gap: 20px;
    line-height: 5px;
    color: var(--second-color);

    img {
      width: auto;
      height: 30px;
    }
  }

  .plot-section {
    text-align: start;
    margin: 10px;
    color: var(--second-color);
  }

  hr {
    opacity: 0.3;
    margin: 20px auto;
  }

  .cast-section {
    text-align: start;
    margin: 10px;
    color: var(--second-color);
  }

  .film-trailer {
    button {
      position: initial;
      border-radius: 5rem;
      border: none;
      padding: 10px;
      width: 80%;
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
        box-shadow: 0 0 3px 3px var(--third-color);
        transform: scale(1.03);
      }
    }
  }
`
