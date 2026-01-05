import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import ShowCase from './components/ShowCase'
import ShowCaseData from './components/ShowCaseData'
import PerformanceWindow from './components/PerformanceWindow'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger);


const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <ProductViewer/>
        <ShowCase/>
        <ShowCaseData />
        <PerformanceWindow/>
        <Features/>
        <Highlights/>
        <Footer/>
    </main>
  )
}

export default App
