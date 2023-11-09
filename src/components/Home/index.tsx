import styled from 'styled-components'

/* import Loader from '../Loader' */
import MediaForm from './Forms/MediaForm'

export default function Home() {
  const handleClickScroll = () => {
    document.querySelector('.header')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <StyledHome>
      <article>
        <MediaForm />
        {/* <Loader /> */}
        {/* {search != null && !loading && <InfoTable data={data} />} */}
      </article>
      <button
        onClick={handleClickScroll}
        className="scroll-top-btn hidden"
        type="button"
      >
        &#11014;
      </button>
    </StyledHome>
  )
}

const StyledHome = styled.div`
  .scroll-top-btn {
    position: fixed;
    z-index: 999;
    margin-bottom: 100px;
    bottom: 1vh;
    right: calc(4.25rem + 1vw);
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    font-size: 4rem;
    font-weight: bold;
    background-color: var(--background-color);
    box-shadow: 0 0 3px 3px var(--main-color);
    color: var(--main-color);
    cursor: pointer;
    outline: 0;
    border: 0;
    transition: all 0.3s ease-out;

    &:hover {
      color: var(--third-color);
      background-color: var(--main-color);
      box-shadow: 0 0 3px 3px var(--third-color);
    }
  }
`
