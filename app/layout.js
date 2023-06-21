import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'],weight:["400"] })

export const metadata = {
  title: 'Eco-Friendly Website',
  description: 'Eco friendly website created by Daniel Simms',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
