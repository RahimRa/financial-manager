'use client'
import React from 'react'
import { SelectedImg } from '../SelectedImg/SelectedImg'
import deleteImg from '../../img/icons/delete.png'
import { useDispatch } from 'react-redux'
import { deleteOperation } from '@/app/store/slice/homeSlice'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.tr`
  &:hover {
    background-color: #f1f5fb;
  }
`

export const Delete = styled(Image)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    background-color: #456ca0;
    transform: scale(1.2);
  }

  &:focus {
    outline: 2px solid #1354ce;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    pointer-events: none;
  }
`

interface Props {
  id: string
  productOption: string
  amount: number
  date: string
  type: string
}

export const Transaction = ({
  id,
  productOption,
  amount,
  date,
  type,
}: Props) => {
  const dispatch = useDispatch()

  const handleDeleteOperation = () => {
    dispatch(
      deleteOperation({
        id: id,
        amount: amount,
        type: type,
      })
    )
  }

  return (
    <Wrapper>
      <td>
        <SelectedImg option={productOption} />
      </td>
      <td>{productOption}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td>€{amount}</td>
      <td>
        <Delete src={deleteImg} alt='delete' onClick={handleDeleteOperation} />
      </td>
    </Wrapper>
  )
}
