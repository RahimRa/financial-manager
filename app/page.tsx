'use client'

import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {
  selectTotalExpense,
  selectTotalIncome,
  selectHome,
} from './store/slice/selector'
import { TotalCount } from './components/TotalCount/TotalCount'
import { FinancialChart } from './components/Chart/FinancialChart'
import { TransactionList } from './components/TransactionList/TransactionList'
import { SelectedImg } from './components/SelectedImg/SelectedImg'

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr ;
  grid-template-areas:
    'totalCount financialChart financialChart financialChart'
    'List List List List'
    'List List List List'
    'List List List List';
  padding: 16px;
`
const GridElement1 = styled.div`
  grid-area: totalCount;
  display: flex;
  flex-direction: column;
`

const GridElement2 = styled.div`
  grid-area: financialChart;
`

const GridElement3 = styled.div`
  grid-area: List;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export default function Home() {
  const totalIncome = useSelector(selectTotalIncome)
  const totalExpense = useSelector(selectTotalExpense)
  const state = useSelector(selectHome)

  // const isLoading = totalIncome === undefined || totalExpense === undefined

  return (
    <Wrapper>
      <GridElement1>
        <TotalCount title='Total income' totalAmount={totalIncome} />
        <TotalCount title='Total expense' totalAmount={totalExpense} />
      </GridElement1>
      <GridElement2>
        <FinancialChart />
      </GridElement2>
      <GridElement3>
        <TransactionList />
      </GridElement3>
    </Wrapper>
  )
}
