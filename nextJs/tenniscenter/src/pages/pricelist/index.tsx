import React from 'react'
import style from '../../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
const index = () => {
  return (
    <main id={style.main}>
        <Header/>
        <section className={style.description} id={style.tableContainer}>
            <h3>Tenniscenter Hinnasto 2023</h3>
            <table className={style.table}>
                <tr className={style.tr}>
                    <th>Tid</th>
                    <th>Tennis</th>
                    <th>Badminton</th>
                    <th>Squash</th>
                    <th>Pingis</th>
                </tr>
                <tr className={style.tr}>
                    <td>8-10</td>
                    <td>18€</td>
                    <td>16€</td>
                    <td>12€</td>
                    <td>6€</td>
                </tr>
                <tr className={style.tr}>
                    <td>10-15</td>
                    <td>22€</td>
                    <td>18€</td>
                    <td>16€</td>
                    <td>8€</td>
                </tr>
                <tr className={style.tr}>
                    <td>15-21</td>
                    <td>24€</td>
                    <td>20€</td>
                    <td>18€</td>
                    <td>10€</td>
                </tr>
                <tr className={style.tr}>
                    <td>21-22</td>
                    <td>18€</td>
                    <td>16€</td>
                    <td>12€</td>
                    <td>6€</td>
                </tr>
            </table>
        </section>
        <Footer/>
    </main>
  )
}

export default index