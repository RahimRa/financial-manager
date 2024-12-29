'use client'

import dynamic from 'next/dynamic'

export const FinancialChart = dynamic(
  () => import('./FinancialChartInternal'),
  {
    ssr: false,
  }
)
