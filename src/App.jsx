import React, { useState } from 'react'
import Nav from './components/Nav'
import List from './pages/List'
import Cart from './pages/Cart'
import useNetwork from './network/useNetwork'

const App = () => {

  const [showCart, setShowCart] = useState(false)

  const network = useNetwork()

  if(!network.isLoading && !network.data){
    network.fatch()
  }

  // console.log(network)

  return (
    <div className='pt-5'>
      <Nav setShowCart={setShowCart} showCart={showCart}/>
      {
        showCart ? <Cart/> : <List/>
      }
    </div>
  )
}

export default App