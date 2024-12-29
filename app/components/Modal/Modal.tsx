'use client'

import Image from 'next/image'
import close from '../../img/icons/stornieren.png'
import { useState } from 'react'
import { AmountInput } from '../AmountInput/AmountInput'
import { Wrapper, InnerWrapp, Main, CloseImgWrapper, Button } from './styles'
import { Dropdown } from '../Dropdown/Dropdown'
import { useDispatch } from 'react-redux'
import { setFinancialOperation } from '@/app/store/slice/homeSlice'
import { nanoid } from 'nanoid'
import { SelectedImg } from '../SelectedImg/SelectedImg'

interface ModalWProps {
  onClick: () => void
}

export const Modal = ({ onClick }: ModalWProps) => {
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [amount, setAmount] = useState('')
  const dispatch = useDispatch()

  const numberAmount = parseFloat(amount)

  const title = ['options', 'type']

  const isFormValid = () => {
    return selectedOption && selectedType && amount
  }

  const handleAddTransaction = () => {
    const currentDate = new Date()
    const newDate = currentDate.toLocaleDateString()
    const id = nanoid()

    if (isFormValid()) {
      dispatch(
        setFinancialOperation({
          id: id,
          productOption: selectedOption,
          amount: numberAmount,
          date: newDate,
          type: selectedType,
        })
      )
      onClick()
    }
  }

  const optionsList: string[] = [
    'ProComp',
    'SCHERDEL',
    'United Internet',
    'Auto',
    'Entertaiment',
    'Food',
    'Present',
    'Health',
    'Housing',
    'Restaurant',
    'Transport',
    'Cloth',
    'Taxi',
    'Communication',
    'Hygiene',
    'Sport',
    'Pets',
  ]

  const type: string[] = ['income', 'expense']

  return (
    <Wrapper>
      <InnerWrapp>
        <h1>Add a transaction</h1>
        <SelectedImg option={selectedOption} />
        <Main>
          <CloseImgWrapper onClick={onClick}>
            <Image src={close} alt='Close icon' width={20} height={20} />
          </CloseImgWrapper>

          <AmountInput value={amount} setValue={setAmount} />
          <Dropdown
            title={title[0]}
            selectedItem={selectedOption}
            setSelectedItem={setSelectedOption}
            options={optionsList}
          />
          <Dropdown
            title={title[1]}
            selectedItem={selectedType}
            setSelectedItem={setSelectedType}
            options={type}
          />
        </Main>

        <Button onClick={handleAddTransaction} disabled={!isFormValid()}>
          Add
        </Button>
      </InnerWrapp>
    </Wrapper>
  )
}
