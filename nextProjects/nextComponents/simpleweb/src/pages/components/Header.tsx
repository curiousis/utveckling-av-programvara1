import React from 'react'
import style  from '../../styles/home.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex justify-between item-center header w-full p-5 h-4'>
        <div className={style.logo}>Logo</div>
        <nav className={style.navBar}>
            <ul className='flex justify-end gap-4 w-full nav-list'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='.article'>Article</Link>
                </li>
                <li>
                    <Link href='.footer'>Footer</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
export default Header