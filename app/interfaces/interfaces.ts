export interface DeleteOperation {
  id: string
  amount: number
  type: string
}

export interface FinancialOperation {
  id: string
  productOption: string
  amount: number
  date: string
  type: string
}

export interface MonthlyStatistics   {
  monthDate: {
    month: string;
    monthNumber: number;
  };
  income: number;
  expense: number;
  id: number;
}

export interface State {
  operations: FinancialOperation[]
  monthlyStats: MonthlyStatistics[]
  totalIncome: number
  totalExpense: number
}
