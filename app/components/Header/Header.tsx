'use client'

import React from 'react'
import { Wrapper, Button } from './styles'
import { useState } from 'react'
import { Modal } from '../Modal/Modal'

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)


  const toggleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <Wrapper>
      <h1>Finance</h1>
      <Button onClick={ toggleModal}>Add</Button>
      {isModalOpen && (
        <Modal onClick={toggleModal} ></Modal>
      )}
    </Wrapper>
  )
}
