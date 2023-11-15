import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './search/slice'
import resultsReducer from './results/slice'

export const store = configureStore({
  reducer: { search: searchReducer, results: resultsReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
