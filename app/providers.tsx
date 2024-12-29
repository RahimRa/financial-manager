'use client'

import { ReactNode } from 'react'
import { store } from './store/store'
import { Provider } from 'react-redux'

type Props = {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>
}
