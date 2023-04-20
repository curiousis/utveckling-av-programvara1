import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center" id={style.main}>
      <Header />
      <Hero />
      <section className={style.description}>
        <div className={style.desContainer}>
          <h3 className={style.heading}>VÄLKOMMEN TILL JAKOBSTADS TENNISCENTER</h3>
          <p>
            Jakobstad Tenniscenter är ett trävligt och avslappnat centrum för olika bollspel.
             Den trivsamma hallen är idealisk för tennis,  badminton, squash och pingis. 
             Man behöver inte bli medlem att spela hos oss. Vi har butik med utrustning och
            racket spänningstjänst.  Vi har öppet alla dagar på året! 
          </p>
          <p>
          Vi ordnar kurser. Se länken här. Hos oss företag kan ordna tyky  och tävlingdagarna. 
          </p>
        </div>
        <div className={style.imageContainer}>
          <Image src='/tennis.jpg'  width={800} height={800} alt='tennis pic'/>
        </div>
       
      </section>
    </main>
  )
}
