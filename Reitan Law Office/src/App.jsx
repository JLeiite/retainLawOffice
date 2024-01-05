import './styles/global.scss'

import { Header } from "./components/Header"
import { Banner } from "./components/Banner"
import { Section } from "./components/Section"
import { Footer } from "./components/Footer"

export function App() {
  
  return (
    <>
      <Header />
      <Banner />
      <Section />
      <Footer />
    </>
    )
  }