import './App.scss'

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
    //console.log(filteredMakeup)
    setMakeupData(filteredMakeup)
  }

  //useEffect 
  useEffect(() => {
    getMakeup()
  }, [])

  //Filtering
  let min = 0
  let max = 255
  let selectedBrand = ""
  let depthOfColour = "All shades"


  const [ minimumDepth, setMinimumDepth ] = useState<number>(min)
  const [ maximumDepth, setMaximumDepth ] = useState<number>(max)
  const [ brand, setBrand ] = useState<string>(selectedBrand)
  const [depth, setDepth] =useState<string>(depthOfColour)

  return (
    <>
      <section> 
        <Navigation depth={depth} brand={brand} setBrand={setBrand} makeupData={makeupData}/>

        <div className="main">
          {/*{minimumDepth},{maximumDepth}*/}
          <Aside setDepth={setDepth} makeupData={makeupData} setMinimumDepth={setMinimumDepth} setMaximumDepth={setMaximumDepth}/>
          <Dashboard brand={brand} minimumDepth={minimumDepth} maximumDepth={maximumDepth} makeupData={makeupData} />
        </div>

      </section>
    </>
  )
}

export default App
