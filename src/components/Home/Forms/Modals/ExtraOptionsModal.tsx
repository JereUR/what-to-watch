import React from 'react'
import Modal from '../../../Modal'
import Content from './Content'
import styled from 'styled-components'
import {
  DEFAULT_TOP,
  DEFAULT_VOTES,
  TOP,
  VOTES
} from '../FormItems.tsx/EXTRA_OPTIONS'
import { useSearchActions } from '../../../../hooks/useSearchActions'

interface Props {
  extraOptionsState: boolean
  setExtraOptionsState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ExtraOptionsModal({
  extraOptionsState,
  setExtraOptionsState
}: Props) {
  const { updateExtraVotes, updateExtraTop } = useSearchActions()

  const handleVotes = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateExtraVotes(e.target.value)
  }

  const handleTop = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateExtraTop(e.target.value)
  }

  return (
    <Modal
      state={extraOptionsState}
      setState={setExtraOptionsState}
      title="EXTRA OPTIONS"
    >
      <Content>
        <StyledExtraOptions>
          <div className="votes-section">
            <select
              name="select-votes"
              className="num-votes"
              onChange={handleVotes}
            >
              <option value={DEFAULT_VOTES.value}>{DEFAULT_VOTES.label}</option>
              {VOTES.map((vote) => (
                <option key={vote.value} value={vote.value}>
                  {vote.label}
                </option>
              ))}
            </select>
          </div>
          <div className="top-section">
            <select
              name="select-top"
              className="top-number"
              onChange={handleTop}
            >
              <option value={DEFAULT_TOP.value}>{DEFAULT_TOP.label}</option>
              {TOP.map((top) => (
                <option key={top.value} value={top.value}>
                  {top.label}
                </option>
              ))}
            </select>
          </div>
        </StyledExtraOptions>
      </Content>
    </Modal>
  )
}

const StyledExtraOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
  font-size: 16px;

  .num-votes {
    background: transparent;
    box-shadow: 0 0 3px 3px var(--main-color);
    border-radius: 5rem;
    font-family: 'Poppins', sans-serif;
    color: var(--words-color);
    font-size: 16px;
    font-weight: bold !important;
    width: 70vh;
    margin-right: 15vh;
    margin-left: -15vh;
    padding: 1rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    text-align: center;
  }

  .num-votes > option {
    font-size: 16px;
    font-weight: 600;
    background-color: var(--header-words);
  }

  .top-number {
    background: transparent;
    box-shadow: 0 0 3px 3px var(--main-color);
    border-radius: 5rem;
    font-family: 'Poppins', sans-serif;
    color: var(--words-color);
    font-size: 16px;
    font-weight: bold !important;
    width: 70vh;
    margin-right: -15vh;
    padding: 1rem;
    border: none;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
  }

  .top-number > option {
    font-size: 16px;
    font-weight: 600;
    background-color: var(--header-words);
  }
`
