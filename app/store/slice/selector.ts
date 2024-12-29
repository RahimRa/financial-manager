import { createSelector } from 'reselect'
import { RootState } from '../store'

const selectHomeState = (state: RootState) => state.home

export const selectHome = createSelector(selectHomeState, (home) => home)

export const selectOptions = createSelector(
  selectHomeState,
  (home) => home.operations
)
export const selectMonatlyStats = createSelector(
  selectHomeState,
  (home) => home.monthlyStats
)
export const selectTotalIncome = createSelector(
  selectHomeState,
  (home) => home.totalIncome
)
export const selectTotalExpense = createSelector(
  selectHomeState,
  (home) => home.totalExpense
)
