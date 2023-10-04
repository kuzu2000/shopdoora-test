import BestDeal from './components/BestDeal'
import Footer from './components/Footer'
import MainSlider from './components/MainSlider'
import Membership from './components/Membership'
import NavBar from './components/NavBar'
import ProductCards from './components/ProductCards'
import ProductTypes from './components/ProductTypes'
import TryNewSlider from './components/TryNewSlider'

function App() {

  return (
    <>
  <NavBar />
  <MainSlider />
  <BestDeal />
  <Membership />
  <ProductCards />
  <TryNewSlider />
  <ProductTypes title="Device" info="Find the best for you here!" />
  <ProductTypes title="Pods" info="Variety of choices available" />
  <ProductTypes title="Disposible" info="Easy, clean & superb flavor" />
  <Footer />
    </>
  )
}

export default App
