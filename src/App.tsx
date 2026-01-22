
import './App.css'
import Aside from './container/Aside/Aside'
import Dashboard from './container/Dashboard/Dashboard'
import Navigation from './container/Navigation/Navigation'
import { useEffect, useState } from 'react'

const App = () => {
  
  const data = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation"
  const getMakeup = async () => {
    const response = await fetch(data)
    const makeupData = await response.json()
    const resultFiltered = Object.values(makeupData).filter((obj: any) => obj.name.includes("Foundation"));
    console.log(resultFiltered)
  }
  getMakeup() 

  useEffect(() => {
    getMakeup()
  }, [])
  
  return (
    <>
      <section> 
        <Navigation />

        <div className="main">
          <Aside />
          <Dashboard />
        </div>

      </section>
    </>
  )
}

export default App
