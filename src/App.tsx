
import './App.css'
import Aside from './container/Aside/Aside'
import Dashboard from './container/Dashboard/Dashboard'
import Navigation from './container/Navigation/Navigation'

function App() {
  
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
