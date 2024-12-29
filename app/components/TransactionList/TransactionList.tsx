import React, { useState, ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { selectOptions } from '@/app/store/slice/selector'
import {Transaction} from '../Transaction/Transaction'
import {
  Wrapper,
  FixedHeader,
  TableContainer,
  TableHeader,
  FilterContainer,
  FilterSelect,
} from './styles'

interface Option {
  id: string
  productOption: string
  amount: number
  date: string
  type: string
}

interface Category {
  title: string
  category: string
  id: number
}

export const TransactionList: React.FC = () => {
  const options = useSelector(selectOptions) as Option[]
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>): void =>
    setSelectedType(e.target.value)
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>): void =>
    setSelectedCategory(e.target.value)

  const filteredOptions = options.filter((el) => {
    return (
      (selectedType === '' || el.type === selectedType) &&
      (selectedCategory === '' || el.productOption === selectedCategory)
    )
  })

  const optionElements = [...filteredOptions]
    .reverse()
    .map((el) => (
      <Transaction
        key={el.id}
        id={el.id}
        productOption={el.productOption}
        amount={el.amount}
        date={el.date}
        type={el.type}
      />
    ))

  const categoriesList: Category[] = [
    { title: 'All Categories', category: '', id: 0 },
    { title: 'ProComp', category: 'ProComp', id: 1 },
    { title: 'SCHERDEL', category: 'SCHERDEL', id: 2 },
    { title: 'United Internet', category: 'United Internet', id: 3 },
    { title: 'Auto', category: 'Auto', id: 4 },
    { title: 'Entertainment', category: 'Entertainment', id: 5 },
    { title: 'Food', category: 'Food', id: 6 },
    { title: 'Health', category: 'Health', id: 7 },
    { title: 'Housing', category: 'Housing', id: 8 },
    { title: 'Restaurant', category: 'Restaurant', id: 9 },
    { title: 'Transport', category: 'Transport', id: 10 },
    { title: 'Cloth', category: 'Cloth', id: 11 },
    { title: 'Taxi', category: 'Taxi', id: 12 },
    { title: 'Communication', category: 'Communication', id: 13 },
    { title: 'Hygiene', category: 'Hygiene', id: 14 },
    { title: 'Sport', category: 'Sport', id: 15 },
    { title: 'Pets', category: 'Pets', id: 16 },
  ]

  const categories = categoriesList.map((el: Category) => (
    <option value={el.category} key={el.id}>
      {el.title}
    </option>
  ))

  return (
    <Wrapper>
      <FixedHeader>
        <h1>Transactions</h1>
        <FilterContainer>
          <FilterSelect value={selectedType} onChange={handleTypeChange}>
            <option value=''>All Types</option>
            <option value='income'>Income</option>
            <option value='expense'>Expense</option>
          </FilterSelect>
          <FilterSelect
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories}
          </FilterSelect>
        </FilterContainer>
      </FixedHeader>
      <TableContainer>
        <thead>
          <tr>
            <TableHeader>Transaction Image</TableHeader>
            <TableHeader>Category</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Amount</TableHeader>
          </tr>
        </thead>
        <tbody>{optionElements}</tbody>
      </TableContainer>
    </Wrapper>
  )
}
