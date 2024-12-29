'use client'
import React from 'react'
import { Wrapper, Input, Label, StyledImage } from './styles'
import img from '../../img/icons/warnen.png'
import { Tooltip } from '@mui/material'

interface Props {
  setValue: (type: string) => void
  value: string
}

export const AmountInput = ({ value, setValue }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*[.,]?[0-9]*$/ 
    if (regex.test(e.target.value)) {
      setValue(e.target.value.replace(',', '.'))
    }
  }

  return (
    <Wrapper>
      <Label htmlFor='input'>Amount</Label>

      <Input
        type='text'
        value={value}
        onChange={handleInputChange}
        placeholder='Enter amount'
      />

      <Tooltip title='Use numbers, "." or ","' placement='left' arrow>
        <StyledImage src={img} alt='Hint icon' />
      </Tooltip>
    </Wrapper>
  )
}
