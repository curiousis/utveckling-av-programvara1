
import { Inter } from 'next/font/google'
import Link from 'next/link'
import style from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className} ${style.main}`}
    >
      
        <Link href='/login'>Login</Link>
        <Link href='/register'>Register</Link>

    </main>
  )
}
