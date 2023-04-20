import React from 'react'
import Link from 'next/link'
import style from '../../styles/Home.module.css'

const Header = () => {
  return (
    <header className='flex justify-between item-center w-full p-4' id={style.header}>
        <div className={style.logo}>
            <h3>TC</h3>
        </div>
        <nav>
            <ul className='flex item-center gap-6'>
                <li>
                    <Link href='/'>HEM</Link>
                </li>
                <li>
                    <Link href='/openhour'>BOKNINGAR</Link>
                </li>
                <li>
                    <Link href='/courses'>KURSER</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header