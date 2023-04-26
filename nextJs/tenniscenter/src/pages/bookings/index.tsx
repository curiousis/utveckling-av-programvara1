import React from 'react'
import style from '../../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const index = () => {
  return (
    <main className='flex w-full flex-col items-center justify-between min-height-screen'id={style.main}>
      <Header/>

          <h2 className={style.heading}>BOKNINGSINSTRUKTIONER </h2>
          <div className={`${style.description}`}>
          <ol>
            <li>1. Ladda ner Playtomic-appen till din telefon från App Store</li>
            <li>2. Registrera dig som användare</li>
            <li>3. Välj plats för användning (klubb) Pietarsaari Tenniscenter</li>
            <li>4. Välj sport från bilden av racketen. Du kan välja tennis, badminton, bordtennis eller squash. Bordtennis hittar du "under" tennis i samma meny!</li>
            <li>5. Välj dag, tid och bana (på samma sida när du rullar ner)</li>
            <li>6. Välj om du betalar för spelet helt själv eller om du delar
               betalningen med dina vänner. Klicka på "Fortsätt betalning" även om du betalar på klubben!</li>
            <li>7. Välj betalsätt. Välj "Betala i klubben" om du
               vill betala på klubben med kontanter, ePass eller andra sportkuponger eller appar.</li>
            <li> 
              8. Du kan avboka eller ändra bokningen 12 timmar innan spelet börjar! För senare 
              avbokningar debiterar vi hela priset för speltimmen!
            </li>
            <li>
              9. I det övre högra hörnet av din Playtomic-profil finns en meny där
               du kan hitta kontaktinformation och support. Därifrån kan du fråga om
               problem med Playtomic-appen. Du kan även kontakta vår hall på 0442362897.
            </li>
          </ol>
        </div>
      <Footer/>
    </main>
  )
}

export default index