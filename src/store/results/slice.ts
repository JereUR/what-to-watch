import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ResultItem {
  description: string
  genres: string
  id: string
  image: string
  imDbRating: string
  imDbRatingVotes: string
  plot: string
  stars: string
  title: string
}

export interface ResultItemProps {
  index: number
  item: ResultItem
}

export interface ResultsState {
  data: ResultItem[]
  loading: boolean
}

const DEFAULT_STATE: ResultsState = {
  data: [],
  loading: false
}

export const resultsSlice = createSlice({
  name: 'results',
  initialState: DEFAULT_STATE,
  reducers: {
    getDataStart: (state) => {
      return { ...state, loading: true }
    },
    getDataSuccess: (state, action: PayloadAction<ResultItem[]>) => {
      return { ...state, data: action.payload, loading: false }
    }
  }
})

export default resultsSlice.reducer
export const { getDataStart, getDataSuccess } = resultsSlice.actions
