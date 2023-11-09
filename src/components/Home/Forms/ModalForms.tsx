import styled from 'styled-components'

import Modal from '../../Modal'
import { TYPES } from './TYPES'
import { GENRES } from './GENRES'
import { VOTES, DEFAULT_VOTES, TOP, DEFAULT_TOP } from './EXTRA_OPTIONS'

interface Props {
  filmTypeState: boolean
  setFilmTypeState: React.Dispatch<React.SetStateAction<boolean>>
  genreState: boolean
  setGenreState: React.Dispatch<React.SetStateAction<boolean>>
  extraOptionsState: boolean
  setExtraOptionsState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalForms({
  filmTypeState,
  setFilmTypeState,
  genreState,
  setGenreState,
  extraOptionsState,
  setExtraOptionsState
}: Props) {
  return (
    <>
      {/* Type Modal */}

      <Modal
        state={filmTypeState}
        setState={setFilmTypeState}
        title="SELECT TYPE OF FILM"
      >
        <Content>
          <StyledType>
            <div className="type-section">
              {TYPES.map((type) => (
                <div key={type.id} className="input-container">
                  <input
                    type="checkbox"
                    value={type.value}
                    id={type.id}
                    className="type-input"
                    /* defaultChecked={types.includes(type.value)} */
                  />
                  <StyledLabel htmlFor={type.id}>{type.label}</StyledLabel>
                </div>
              ))}
            </div>
          </StyledType>
        </Content>
      </Modal>

      {/* Genre Modal */}

      <Modal state={genreState} setState={setGenreState} title="SELECT GENRE/S">
        <ContentGenre>
          <StyledType>
            <div className="genres-section">
              {GENRES.map((genre) => (
                <div key={genre.id}>
                  <input
                    type="checkbox"
                    value={genre.value}
                    id={genre.id}
                    className="genre-input"
                    /* defaultChecked={genres.includes(genre.value)} */
                  />
                  <StyledLabel htmlFor={genre.id}>{genre.label}</StyledLabel>
                </div>
              ))}
            </div>
          </StyledType>
        </ContentGenre>
      </Modal>

      {/* Extra Options Modal */}

      <Modal
        state={extraOptionsState}
        setState={setExtraOptionsState}
        title="EXTRA OPTIONS"
      >
        <Content>
          <StyledType>
            <div className="votes-section">
              <select name="select-votes" className="num-votes">
                <option value={DEFAULT_VOTES.value}>
                  {DEFAULT_VOTES.label}
                </option>
                {VOTES.map((vote) => (
                  <option key={vote.value} value={vote.value}>
                    {vote.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="top-section">
              <select name="select-top" className="top-number">
                <option value={DEFAULT_TOP.value}>{DEFAULT_TOP.label}</option>
                {TOP.map((top) => (
                  <option key={top.value} value={top.value}>
                    {top.label}
                  </option>
                ))}
              </select>
            </div>
          </StyledType>
        </Content>
      </Modal>
    </>
  )
}

const Content = styled.div`
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

const ContentGenre = styled(Content)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledLabel = styled.label`
  display: inline;
  font-weight: 600;
  color: var(--words-color);
  margin-bottom: 11px;
  width: 70vh;
  float: left;
  cursor: pointer;
  padding: 0 0.8rem;
  box-sizing: border-box;
  margin: 1rem;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 100px;
  transition: all 0.5s ease 0s;
  background: var(--third-color);
  box-shadow: 0 0 1px 1px var(--main-color);
`

const StyledType = styled.div`
  margin: 0 auto;

  .type-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    label {
      display: inline;
      font-weight: 600;
      color: var(--words-color);
      margin-bottom: 11px;
      width: 70vh;
      float: left;
      cursor: pointer;
      padding: 0 0.8rem;
      box-sizing: border-box;
      margin: 1rem;
      font-size: 24px;
      font-weight: bold;
      border-radius: 100px;
      transition: all 0.5s ease 0s;
      background: var(--third-color);
      box-shadow: 0 0 1px 1px var(--main-color);
    }
  }

  .genres-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;

    label {
      display: inline;
      font-weight: 600;
      color: var(--words-color);
      width: 300px;
      float: left;
      cursor: pointer;
      padding: 0 0.8rem;
      box-sizing: border-box;
      font-size: 18px;
      font-weight: bold;
      border-radius: 100px;
      transition: all 0.5s ease 0s;
      background: var(--third-color);
      box-shadow: 0 0 1px 1px var(--main-color);
    }

    input[type='checkbox']:checked + label:after {
      margin-left: -2em;
      margin-top: 1em;
    }
  }

  label:hover {
    transform: scale(1.02);
  }

  input + label:before {
    content: '';
    width: 30px;
    height: 30px;
    float: left;
    margin-right: 0.5em;
    margin-left: 0.4em;
    border: 2px solid #ccc;
    background: #fff;
    margin-top: 0.7em;
  }
`
