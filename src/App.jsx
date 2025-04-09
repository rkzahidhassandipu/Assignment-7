import React from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Banner from './components/banner/Banner'
import { Suspense } from 'react'
import Products from './components/products/Products'
import Loading from './components/loading/Loading'
import Footer from './components/layout/Footer'

const fetchProducts = fetch('data.json').then(res => res.json())

function App() {

  return (
    <>
      <Navbar />
      <Banner />

      <Suspense fallback={<Loading />}>
        <Products fetchProducts={fetchProducts} />
      </Suspense>
      
      <Footer />
    </>
  )
}

export default App
