import './App.css'
import Header from './components/Header'
import IntroHeader from './components/IntroHeader'
import About from './components/About'
import Tools from './components/Tools'
import Project from './components/Projects'
import Qualifications from './components/Qualifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from "react-hot-toast";

function App() {
 return <div className='portfolioBlock'>
  <Header />
  <IntroHeader />
   <About/>
   <Tools/>
   <Project/>
   <Qualifications/>
   <Toaster position="top-right" reverseOrder={false} />
   <Contact/>
   <Footer/>

 </div>
}

export default App
