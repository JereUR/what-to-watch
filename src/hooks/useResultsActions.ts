import { fetchData } from '../store/results/useFetchData'
import { SearchState } from '../store/search/slice'
import { useAppDispatch } from './store'

export const useResultsActions = () => {
  const dispatch = useAppDispatch()

  const getResults = (filters: SearchState) => {
    dispatch(fetchData(filters))
  }

  return { getResults }
}
