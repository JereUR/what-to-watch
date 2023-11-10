import TypeModal from './TypeModal'
import GenreModal from './GenreModal'
import ExtraOptionsModal from './ExtraOptionsModal'

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
      <TypeModal
        filmTypeState={filmTypeState}
        setFilmTypeState={setFilmTypeState}
      />
      <GenreModal genreState={genreState} setGenreState={setGenreState} />
      <ExtraOptionsModal
        extraOptionsState={extraOptionsState}
        setExtraOptionsState={setExtraOptionsState}
      />
    </>
  )
}
