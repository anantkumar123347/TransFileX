import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herosection from '../components/Herosection'
import Achivements from '../components/Achivements'
import Fileuploading from '../components/Fileuploading'
import Head from '../components/Head'
function HomePage() {
  return (
    <div>
      <Navbar/>
      {/*<Head/>*/}
      <Fileuploading/>
      <Achivements/>
      <Herosection/>
      <Footer/>
    </div>
  )
}

export default HomePage