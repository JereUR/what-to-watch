import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ExtraOptions {
  votes: string
  top: string
}

interface SearchState {
  types: string[]
  genres: string[]
  extra_options: ExtraOptions
}

const DEAFULT_STATE: SearchState = {
  types: [],
  genres: [],
  extra_options: {
    votes: '10000',
    top: '100'
  }
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: DEAFULT_STATE,
  reducers: {
    addNewType: (state, action: PayloadAction<string>) => {
      state.types.push(action.payload)
    },
    removeType: (state, action: PayloadAction<string>) => {
      state.types = state.types.filter((item) => item !== action.payload)
    },
    addNewGenre: (state, action: PayloadAction<string>) => {
      state.genres.push(action.payload)
    },
    removeGenre: (state, action: PayloadAction<string>) => {
      state.genres = state.genres.filter((item) => item !== action.payload)
    },
    updateVotes: (state, action: PayloadAction<string>) => {
      state.extra_options.votes = action.payload
    },
    updateTop: (state, action: PayloadAction<string>) => {
      state.extra_options.top = action.payload
    }
  }
})

export default searchSlice.reducer
export const {
  addNewType,
  removeType,
  addNewGenre,
  removeGenre,
  updateVotes,
  updateTop
} = searchSlice.actions
