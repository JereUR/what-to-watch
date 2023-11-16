import styled, { keyframes } from 'styled-components'
import { submitIcon } from '../../../utils/Icons'
import { useAppSelector } from '../../../hooks/store'
import { useResultsActions } from '../../../hooks/useResultsActions'
import { showDataType } from './MediaForm'

export default function SubmitButton({ setShowData }: showDataType) {
  const filters = useAppSelector((state) => state.search)
  const { getResults } = useResultsActions()

  const handleSubmit = () => {
    getResults(filters)
    setShowData(true)
  }

  return (
    <StyledSubmitButton>
      <button type="button" onClick={handleSubmit}>
        <span className="span">WHAT TO WATCH</span>
        <span className="second">{submitIcon}</span>
      </button>
    </StyledSubmitButton>
  )
}

const colorAnim = keyframes`0% {
    fill: var(--header-words);
  }

  50% {
    fill: var(--second-color);
  }

  100% {
    fill: var(--header-words);
  }`

const StyledSubmitButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    display: flex;
    padding: 11px 55px;
    margin-top: 3vw;
    margin-bottom: 0.8vw;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    color: var(--header-words);
    background: var(--main-color);
    transition: 1s;
    box-shadow: 6px 6px 0 black;
    transform: skewX(-15deg);
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      transition: 0.5s;
      box-shadow: 10px 10px 0 var(--second-color);
    }

    & .second {
      transition: 0.5s;
      margin-right: 0px;
    }

    &:hover .second {
      transition: 0.5s;
      margin-right: 45px;
    }

    .span {
      transform: skewX(15deg);
    }

    .second {
      width: 20px;
      margin-left: 30px;
      position: relative;
      top: 12%;
    }

    .one {
      transition: 0.4s;
      transform: translateX(-60%);
    }

    .two {
      transition: 0.5s;
      transform: translateX(-30%);
    }

    &:hover .three {
      animation: ${colorAnim} 1s infinite 0.2s;
    }

    &:hover .one {
      transform: translateX(0%);
      animation: ${colorAnim} 1s infinite 0.6s;
    }

    &:hover .two {
      transform: translateX(0%);
      animation: ${colorAnim} 1s infinite 0.4s;
    }
  }
`
