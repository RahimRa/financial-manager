'use client'

import React, { useState } from 'react'

import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownListItem,
  Label
} from './styles'

interface DropdownProps {
  title: string
  selectedItem: string
  setSelectedItem: (tipe: string) => void
  options: string[]
}

export const Dropdown = ({
  selectedItem,
  setSelectedItem,
  options,
  title
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleChooseItem = (item: string) => {
    setSelectedItem(item)
    setIsOpen(false)
  }


  return (
    <DropdownContainer>
      <Label htmlFor='dropdown'>{`${title}`}</Label>

      <DropdownButton onClick={toggleDropdown}>
        {selectedItem || `Select a ${title}`}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option: string) => (
            <DropdownListItem
              key={option}
              onClick={() => handleChooseItem(option)}
            >
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  )
}
