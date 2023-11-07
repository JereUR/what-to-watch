import styled from 'styled-components'

import Modal from '../../Modal'
import { TYPES } from './TYPES'
import { GENRES } from './GENRES'

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
            {TYPES.map((type) => (
              <div key={type.id}>
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
          </StyledType>
        </Content>
      </Modal>

      {/* Genre Modal */}

      <Modal state={genreState} setState={setGenreState} title="SELECT GENRE/S">
        <Content>
          <StyledType>
            {GENRES.map((genre) => (
              <div key={genre.id}>
                <input
                  type="checkbox"
                  value={genre.value}
                  id={genre.id}
                  /* defaultChecked={genres.includes(genre.value)} */
                />
                <StyledLabel htmlFor={genre.id}>{genre.label}</StyledLabel>
              </div>
            ))}
          </StyledType>
        </Content>
      </Modal>

      {/* Extra Options Modal */}

      <Modal
        state={extraOptionsState}
        setState={setExtraOptionsState}
        title="EXTRA OPTIONS"
      >
        <Content>
          <StyledType>
            {GENRES.map((genre) => (
              <div key={genre.id}>
                <input
                  type="checkbox"
                  value={genre.value}
                  id={genre.id}
                  /* defaultChecked={genres.includes(genre.value)} */
                />
                <StyledLabel htmlFor={genre.id}>{genre.label}</StyledLabel>
              </div>
            ))}
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
