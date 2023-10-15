import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { WalletProvider } from './components'
import { Header } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'stellarX',
  description: 'Cross chain lending protocol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          <Header />
          {children}
        </WalletProvider>
      </body>
    </html>
  )
}
