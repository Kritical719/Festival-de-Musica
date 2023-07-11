import "../src/scss/App.scss"
import '../node_modules/normalize.css'
import Header from './components/Header'
import Videos from './components/Videos'
import Festival from "./components/Festival"
import LineUp from "./components/LineUp"
import Galeria from './components/Galeria'
import Boleteria from "./components/Boleteria"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <Header />
    <Videos/>
    <Festival/>
    <LineUp/>
    <Galeria/>
    <Boleteria/>
    <Footer/>
    </>
  )
}

export default App