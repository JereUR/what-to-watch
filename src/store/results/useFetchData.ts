import { SearchState } from '../search/slice'
import { ResultItem, getDataStart, getDataSuccess } from './slice'
import { AppDispatch } from '..'

const STATIC_DATA: ResultItem[] = [
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/500x700',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/700x800',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/900x700',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/800x1000',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/800x800',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/800x900',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013',
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
    description: 'TV Series 2008–2013',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  },
  {
    imDbRating: '9.5',
    image: 'https://source.unsplash.com/800x900',
    title: 'Breaking Bad',
    genres: 'Crimen, Drama, Thriller',
    description: 'TV Series 2008–2013',
    plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    imDbRatingVotes: '2.1M',
    stars: 'Bryan Cranston, Aaron Paul, Anna Gunn',
    id: '1'
  }
]

export const fetchData =
  (searchState: SearchState) => async (dispatch: AppDispatch) => {
    dispatch(getDataStart())

    const url = `${import.meta.env.VITE_API_URL}?title_type=${
      searchState.types
    }&genres=${searchState.genres}&sort=user_rating,desc&num_votes=${
      searchState.extra_options.votes
    },999999999&count=${searchState.extra_options.top}`

    console.log(`Fetch to ${url}`)

    setTimeout(() => {
      dispatch(getDataSuccess(STATIC_DATA))
    }, 1000)
  }
