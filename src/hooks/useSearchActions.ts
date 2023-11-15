import {
  addNewGenre,
  addNewType,
  removeGenre,
  removeType,
  setDefaultState,
  updateTop,
  updateVotes
} from '../store/search/slice'
import { useAppDispatch } from './store'

export const useSearchActions = () => {
  const dispatch = useAppDispatch()

  const addType = (value: string) => {
    dispatch(addNewType(value))
  }

  const removeTypeItem = (value: string) => {
    dispatch(removeType(value))
  }

  const addGenre = (value: string) => {
    dispatch(addNewGenre(value))
  }

  const removeGenreItem = (value: string) => {
    dispatch(removeGenre(value))
  }

  const updateExtraVotes = (value: string) => {
    dispatch(updateVotes(value))
  }

  const updateExtraTop = (value: string) => {
    dispatch(updateTop(value))
  }

  const resetValues = () => {
    dispatch(setDefaultState())
  }

  return {
    addType,
    removeTypeItem,
    addGenre,
    removeGenreItem,
    updateExtraVotes,
    updateExtraTop,
    resetValues
  }
}
