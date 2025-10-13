import React from 'react'
import Header from '../component/header'
import Slider from './slider'
import Trading from './trading'
import Awards from './awards'   
import About from './about'
import Whyxpo from './whyxpo'
import Blog from './blog'
import Fromindex from './fromindex'
import Team from './team'
import Contact from './contact'
import Footer from '../component/footer'
import Searchpopup from './searchpopup'
import Sidebarinfo from './sidebarinfo'
import Modal from './modal'

const home = () => {
  return (
    <div>
      <Header /> 
       <Slider />
       <Trading />
       <Awards />
       <About />
       <Whyxpo />
       <Blog />
       <Fromindex />
       <Team />
       <Contact />
       <Footer />
       <Searchpopup />
      <Sidebarinfo />
       <Modal />

    </div>
  )
}

export default home
