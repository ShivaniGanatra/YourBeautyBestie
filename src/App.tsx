import './App.css'

import Aside from './container/Aside/Aside'
import Dashboard from './container/Dashboard/Dashboard'
import Navigation from './container/Navigation/Navigation'

import { useEffect, useState } from 'react'

const App = () => {
  
  //fetch makeup data from makeup api
  const data = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation"

  //useState to store makeup data
  const [makeupData, setMakeupData] = useState<object[]>([]);

  //retrieve makeup data from api
  const getMakeup = async () => {
    const response = await fetch(data)
    const makeupData = await response.json()
    const filteredMakeup = Object.values(makeupData).filter((makeupProduct: any) => makeupProduct.name.includes("Foundation")) as object[];
    console.log(filteredMakeup)
    setMakeupData(filteredMakeup)
  }

  //useEffect 
  useEffect(() => {
    getMakeup()
  }, [])

  return (
    <>
      <section> 
        <Navigation />

        <div className="main">
          <Aside />
          <Dashboard makeupData={makeupData} />
        </div>

      </section>
    </>
  )
}

export default App
