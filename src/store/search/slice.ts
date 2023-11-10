import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ExtraOptions {
  votes: string
  top: string
}

interface SearchState {
  types: Item[]
  genres: Item[]
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

export interface Item {
  value: string
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: DEAFULT_STATE,
  reducers: {
    addNewType: (state, action: PayloadAction<Item>) => {
      state.types.push(action.payload)
    }
  }
})

export default searchSlice.reducer
export const { addNewType } = searchSlice.actions
