import './assets/css/styles.css'
import AppFeatures from './components/AppFeatures'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import HowDoesItWork from './components/HowDoesItWork'
import LogoSection from './components/LogoSection'
import MakeYourMoney from './components/MakeYourMoney'
import Navbar from './components/Navbar'
import ReceivePayments from './components/ReceivePayments'
import Reviews from './components/Reviews'
import Showcase from './components/Showcase'
import Subscribe from './components/Subscribe'

function App() {
  

  return (
    <>
    <Navbar/>

    <main>
      <Showcase/>
      <LogoSection/>
      <AppFeatures/>
      <HowDoesItWork/>
      <MakeYourMoney/>
      <ReceivePayments/>
      <Reviews/>
      <FAQSection/>
      <Subscribe/>
    </main>

    <Footer/> 
    </>
  )
}

export default App
