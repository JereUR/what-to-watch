import React from 'react'
import Modal from '../../../Modal'
import Content from './Content'
import { GENRES } from '../FormItems.tsx/GENRES'
import styled from 'styled-components'
import { useAppSelector } from '../../../../hooks/store'
import { useSearchActions } from '../../../../hooks/useSearchActions'

interface Props {
  genreState: boolean
  setGenreState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function GenreModal({ genreState, setGenreState }: Props) {
  const genres = useAppSelector((state) => state.search.genres)
  const { addGenre, removeGenreItem } = useSearchActions()

  const genresHandleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!genres.includes(e.target.value)) {
      addGenre(e.target.value)
    } else {
      removeGenreItem(e.target.value)
    }
  }

  return (
    <Modal state={genreState} setState={setGenreState} title="SELECT GENRE/S">
      <Content className="genre-modal">
        <StyledGenre>
          <div className="genres-section">
            {GENRES.map((genre) => (
              <div key={genre.id}>
                <input
                  type="checkbox"
                  value={genre.value}
                  id={genre.id}
                  className="genre-input"
                  onChange={genresHandleChecked}
                  defaultChecked={genres.includes(genre.value)}
                />
                <label htmlFor={genre.id}>{genre.label}</label>
              </div>
            ))}
          </div>
        </StyledGenre>
      </Content>
    </Modal>
  )
}

const StyledGenre = styled.div`
  margin: 0 auto;

  .genres-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

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
