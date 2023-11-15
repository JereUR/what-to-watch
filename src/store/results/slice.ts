import { createSlice } from '@reduxjs/toolkit'

interface ResultItem {
  imDbRating: string
  image: string
  title: string
  genres: string
  description: string
  plot: string
  imDbRatingVotes: string
  stars: string
  id: string
}

const DEFAULT_STATE: ResultItem[] = [
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/800x600',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013 TV-MA 50h 30m',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/700x400',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013 TV-MA 50h 30m',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/900x500',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013 TV-MA 50h 30m',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/800x600',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013 TV-MA 50h 30m',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/800x600',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013 TV-MA 50h 30m',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/800x600',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013 TV-MA 50h 30m',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/800x600',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013 TV-MA 50h 30m',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/800x600',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013 TV-MA 50h 30m',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  }
]

export const resultsSlice = createSlice({
  name: 'results',
  initialState: DEFAULT_STATE,
  reducers: {}
})

export default resultsSlice.reducer
