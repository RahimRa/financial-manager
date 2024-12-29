'use client'

import React from 'react'
import { Wrapper,InnerWrap, Title, StyledImage } from './styles'
import euro from '../../img/icons/euro.png'

interface Props {
  title: string
  totalAmount: number
}

export const TotalCount = ({ title, totalAmount }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <InnerWrap>
        <StyledImage src={euro} alt='Euro' />
        <h1>{totalAmount}</h1>
      </InnerWrap>
    </Wrapper>
  )
}
