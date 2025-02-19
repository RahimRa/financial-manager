import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

import { Header } from './components/Header/Header'
import { Providers } from './providers'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ausgabemanager',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
            <Header />
            <main className='container'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
