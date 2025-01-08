import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit'
import {
  State,
  FinancialOperation,
  DeleteOperation,
} from '@/app/interfaces/interfaces'

const initialState: State = {
  operations: [
    {
      id: '1',
      productOption: 'Auto',
      amount: 15000,
      date: '05.01.2024',
      type: 'expense',
    },
  
  ],
  monthlyStats: [
    {
      monthDate: { month: 'January', monthNumber: 0 },
      income: 10000,
      expense: 7000,
      id: 0,
    },
   
  ],
  totalIncome: 253725,
  totalExpense: 289203,
}

const setFinancialOperationReducer: CaseReducer<
  State,
  PayloadAction<FinancialOperation>
> = (state: State, action: PayloadAction<FinancialOperation>) => {
  const { type, amount, date } = action.payload
  const parsedAmount = parseFloat(amount.toString())
  const month = new Date(date).getMonth()

  const updatedMonthlyStats = state.monthlyStats.map((item) => {
    if (item.monthDate.monthNumber === month) {
      return {
        ...item,
        income: type === 'income' ? item.income + parsedAmount : item.income,
        expense:
          type === 'expense' ? item.expense + parsedAmount : item.expense,
      }
    }
    return item
  })

  return {
    ...state,
    operations: [
      ...state.operations,
      { ...action.payload, amount: parsedAmount },
    ],
    monthlyStats: updatedMonthlyStats,
    totalIncome:
      type === 'income' ? state.totalIncome + parsedAmount : state.totalIncome,
    totalExpense:
      type === 'expense'
        ? state.totalExpense + parsedAmount
        : state.totalExpense,
  }
}

const deleteOperationReducer: CaseReducer<
  State,
  PayloadAction<DeleteOperation>
> = (state: State, action: PayloadAction<DeleteOperation>) => {
  const { id, amount, type } = action.payload
  const parsedAmount = parseFloat(amount.toString())

  state.operations = state.operations.filter((el) => el.id !== id)

  state.monthlyStats = state.monthlyStats.map((item) => {
    if (
      state.operations.find(
        (op) => new Date(op.date).getMonth() === item.monthDate.monthNumber
      )
    ) {
      return {
        ...item,
        income: type === 'income' ? item.income - parsedAmount : item.income,
        expense:
          type === 'expense' ? item.expense - parsedAmount : item.expense,
      }
    }
    return item
  })

  if (type === 'income') {
    state.totalIncome -= parsedAmount
  } else if (type === 'expense') {
    state.totalExpense -= parsedAmount
  }
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setFinancialOperation: setFinancialOperationReducer,
    deleteOperation: deleteOperationReducer,
  },
})

export const { setFinancialOperation, deleteOperation } = homeSlice.actions
export default homeSlice.reducer
