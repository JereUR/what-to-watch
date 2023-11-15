import { useState } from 'react'
import styled from 'styled-components'

import ButtonForm from './ButtonForm'
import {
  cameraIcon,
  genreIcon,
  refreshIcon,
  settingsIcon
} from '../../../utils/Icons'
import ModalForms from './Modals/ModalForms'
import SubmitButton from './SubmitButton'
import { useSearchActions } from '../../../hooks/useSearchActions'

export default function MediaForm() {
  const [filmTypeState, setFilmTypeState] = useState(false)
  const [genreState, setGenreState] = useState(false)
  const [extraOptionsState, setExtraOptionsState] = useState(false)
  const { resetValues } = useSearchActions()

  const handleFilmModal = () => {
    setFilmTypeState(!filmTypeState)
  }

  const handleGenreModal = () => {
    setGenreState(!genreState)
  }

  const handleExtraOptionsModal = () => {
    setExtraOptionsState(!extraOptionsState)
  }

  return (
    <StyledMediaForm>
      <ButtonContainer>
        <ButtonForm
          key="film-modal"
          icon={cameraIcon}
          onClickFunction={handleFilmModal}
          text="SELECT FILM TYPE"
        />
        <ButtonForm
          key="genre-modal"
          icon={genreIcon}
          onClickFunction={handleGenreModal}
          text="SELECT GENRE/S"
        />
        <ButtonForm
          key="settings-modal"
          icon={settingsIcon}
          onClickFunction={handleExtraOptionsModal}
          text="EXTRA OPTIONS"
        />
      </ButtonContainer>
      <StyledSection>
        <button type="button" onClick={() => resetValues()}>
          {refreshIcon} RESET VALUES
        </button>
      </StyledSection>
      <ModalForms
        filmTypeState={filmTypeState}
        setFilmTypeState={setFilmTypeState}
        genreState={genreState}
        setGenreState={setGenreState}
        extraOptionsState={extraOptionsState}
        setExtraOptionsState={setExtraOptionsState}
      />
      <SubmitButton />
    </StyledMediaForm>
  )
}

const ButtonContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`

const StyledMediaForm = styled.div`
  max-width: 100%;
  padding: 0;
`

const StyledSection = styled.section`
  button {
    position: absolute;
    padding: 5px;
    right: 30px;
    width: 15vw;
    border-radius: 100px;
    font-size: 24px;
    font-weight: bold;
    background-color: var(--background-color);
    box-shadow: 0 0 3px 3px var(--main-color);
    color: var(--main-color);
    cursor: pointer;
    border: 0;
    transition: all 0.3s ease-out;

    &:hover {
      color: var(--third-color);
      background-color: var(--main-color);
      box-shadow: 0 0 3px 3px var(--third-color);
      transform: scale(1.05);
    }

    i {
      font-size: 24px;
    }
  }
`
