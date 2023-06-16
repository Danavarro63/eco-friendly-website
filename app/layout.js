import './globals.css'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'] })

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
