import type { Metadata } from 'next'
import { Oxanium } from 'next/font/google'
import './globals.css'

const oxanium = Oxanium({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bugstore',
  description: 'Sua loja de utilitários nerd.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={oxanium.className}>{children}</body>
    </html>
  )
}
