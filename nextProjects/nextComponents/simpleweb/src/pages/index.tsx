
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex justify-between w-full flex-col items-center">
      <Header />
      <Article/>
      <Footer/>
    </main>
  )
}