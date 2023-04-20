import React from 'react'
import Image from 'next/image'
import style  from '../../styles/Home.module.css'

function Article() {
  return (
    <section className={style.itemContainer}>
      <section className={style.hero}>
        <div>
          <h1 className={style.heading}>Hero</h1>
        </div>
      </section>
      <div className={style.line}></div>
      <section className={style.contentSection}>
      <Image src='/ink.jpg' width={400} height={400} className={style.image} alt='Image of an ink pen'/>
        <p className='flex item-center justify-center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur unde eligendi repellendus molestias enim aliquam, omnis distinctio similique harum maiores? Odit perspiciatis ipsum totam possimus asperiores beatae voluptate deserunt cumque voluptatum. Aperiam, aliquam iusto nulla quos hic,
           enim debitis ipsam ad eius quaerat non sapiente 
           reprehenderit itaque minus? Neque, autem.
        </p>
      </section>
      <div className={style.line}></div>
    </section>

  )
}

export default Article