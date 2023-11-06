import { useState } from 'react'
import styled from 'styled-components'

import ButtonForm from './ButtonForm'
import { cameraIcon, genreIcon, settingsIcon } from '../../utils/Icons'

export default function MediaForm() {
  const [filmTypeState, setFilmTypeState] = useState(false)
  const [genreState, setGenreState] = useState(false)
  const [extraOptionsState, setExtraOptionsState] = useState(false)

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
