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

gsap.registerPlugin(ScrollTrigger);


const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <ProductViewer/>
        <ShowCase/>
        {/* <ShowCaseData /> */}
        <PerformanceWindow/>
        <Features/>
        <Highlights/>
    </main>
  )
}

export default App
