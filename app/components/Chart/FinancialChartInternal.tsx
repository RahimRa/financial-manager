'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useSelector } from 'react-redux'
import { selectHome, selectMonatlyStats } from '../../store/slice/selector'

const FinancialChartInternal: React.FC = () => {
  const data = useSelector(selectMonatlyStats)

  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='income' fill='lightblue' radius={[20, 20, 0, 0]} />
        <Bar dataKey='expense' fill='steelblue' radius={[20, 20, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default FinancialChartInternal
