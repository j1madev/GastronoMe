import { type Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { type ReactNode } from 'react'

import './globals.css'

// Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'GastronoMe',
  description: 'A site where people share its favorite recipes',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} min-h-screen bg-[#282c34] bg-[url('/images/bg-scatter.svg')]
        bg-cover bg-center bg-fixed`}
      >
        {children}
      </body>
    </html>
  )
}
