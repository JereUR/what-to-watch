import styled from 'styled-components'
import Modal from '../../../Modal'
import { TYPES } from '../FormItems.tsx/TYPES'
import Content from './Content'
import { useAppSelector } from '../../../../hooks/store'
import { useSearchActions } from '../../../../hooks/useSearchActions'

interface Props {
  filmTypeState: boolean
  setFilmTypeState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TypeModal({ filmTypeState, setFilmTypeState }: Props) {
  const types = useAppSelector((state) => state.search.types)
  const { addType, removeTypeItem } = useSearchActions()

  const typesHandleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!types.includes(e.target.value)) {
      addType(e.target.value)
    } else {
      removeTypeItem(e.target.value)
    }
  }

  return (
    <Modal
      state={filmTypeState}
      setState={setFilmTypeState}
      title="SELECT TYPE OF FILM"
    >
      <Content>
        <StyledType>
          <div className="type-section">
            {TYPES.map((type) => (
              <div key={type.id} className="input-container">
                <input
                  type="checkbox"
                  value={type.value}
                  id={type.id}
                  className="type-input"
                  onChange={typesHandleChecked}
                  defaultChecked={types.includes(type.value)}
                />
                <label htmlFor={type.id}>{type.label}</label>
              </div>
            ))}
          </div>
        </StyledType>
      </Content>
    </Modal>
  )
}

const StyledType = styled.div`
  margin: 0 auto;

  .type-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    label {
      display: inline;
      font-weight: 600;
      color: var(--words-color);
      margin-bottom: 11px;
      width: 70vh;
      float: left;
      cursor: pointer;
      padding: 0 0.8rem;
      box-sizing: border-box;
      margin: 1rem;
      font-size: 24px;
      font-weight: bold;
      border-radius: 100px;
      transition: all 0.5s ease 0s;
      background: var(--third-color);
      box-shadow: 0 0 1px 1px var(--main-color);
    }

    label:hover {
      transform: scale(1.02);
    }

    input + label:before {
      content: '';
      width: 30px;
      height: 30px;
      float: left;
      margin-right: 0.5em;
      margin-left: 0.4em;
      border: 2px solid #ccc;
      background: #fff;
      margin-top: 0.7em;
    }
  }
`
