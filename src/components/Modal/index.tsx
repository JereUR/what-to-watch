import styled from 'styled-components'
import { Dispatch, ReactNode, SetStateAction } from 'react'

import { crossIcon } from '../../utils/Icons'

interface Props {
  children: ReactNode
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
  title: string
}

export default function Modal({ children, state, setState, title }: Props) {
  return (
    <>
      {state && (
        <Overlay>
          <ModalContainer>
            <ModalHeader>
              <h3>{title}</h3>
            </ModalHeader>
            <button type="button" onClick={() => setState(false)}>
              {crossIcon}
            </button>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  )
}

const ModalContainer = styled.div`
  min-height: 200px;
  width: 170vh;
  background: var(--header-words);
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;

  button {
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
    border: none;
    width: 25px;
    height: 25px;
    background: none;
    transition: 0.3s ease all;
    border-radius: 5px;
    color: var(--main-color);

    &:hover {
      background: var(--third-color);
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px groove var(--words-color);

  h3 {
    margin-left: 1rem;
    font-weight: 500;
    color: var(--main-color);
  }
`

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`
