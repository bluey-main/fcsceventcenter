import { Inter, Lato } from 'next/font/google'
import './globals.css'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'

const lato = Lato({ weight:['300','400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar/>
        {children}</body>
        <Footer/>
    </html>
  )
}
