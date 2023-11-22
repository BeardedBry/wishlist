import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { User } from '@/components/user'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wish List',
  description: 'A wish list for the holidays',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <nav className='p-4 w-full bg-green-500 flex justify-between h-16'>
            <h1>Wish List</h1>
            <div className='float-right'>
              <User />
            </div>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
