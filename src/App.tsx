import './App.scss';
import { cleanedProductsData } from "./functions";

import Aside from './container/Aside/Aside'
import Dashboard from './container/Dashboard/Dashboard'
import Navigation from './container/Navigation/Navigation'

import { useEffect, useState } from 'react'
import type { Product } from './interfaces';

const App = () => {
  //fetch makeup data from makeup api
  const data = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation"

  //useState to store makeup data
  const [makeupData, setMakeupData] = useState<Product[]>([]);

  //retrieve makeup data from api
  const getMakeup = async () => {
    const response = await fetch(data)
    const makeupData = await response.json()
    const filteredMakeup = Object.values(makeupData).filter((makeupProduct: any) => makeupProduct.name.includes("Foundation") && makeupProduct.product_colors.length > 0) as object[];
    const cleanedAndFilteredMakeup = cleanedProductsData(filteredMakeup)
    console.log(filteredMakeup)
    setMakeupData(cleanedAndFilteredMakeup)
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
      <section> 
        <Navigation depth={depth} brand={brand} setBrand={setBrand} makeupData={makeupData}/>
        <div className="main">
          <Aside setDepth={setDepth} makeupData={makeupData} setMinimumDepth={setMinimumDepth} setMaximumDepth={setMaximumDepth}/>
          <Dashboard brand={brand} minimumDepth={minimumDepth} maximumDepth={maximumDepth} makeupData={makeupData} />
        </div>
      </section>
  )
}

export default App
