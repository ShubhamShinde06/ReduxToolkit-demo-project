import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import { store } from './store/index.js'
import {store} from './store/index.js'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
    

)

/*
//how to run redux using js
let store = {}

const userAction = {
  name: "billy",
  value: {
    mag: "ok, i am here"
  }
}

function updater(oldStore, action){
  if(action.name === 'billy'){
    return {...oldStore, ...action.value}
  }
}

function dispatch(oldStore, action){
  return updater(oldStore, action)
}

const newStore = dispatch(store, userAction)
console.log('ORG ', store)
console.log('inserting ',newStore)
*/

/*
//1
const initialState = {name: 'REACT'}

//2
//const store = createStore(reducer)

//3
function reducer(state = initialState, action){
  // this reducer function must be return

  if(action.type === 'UPDATE_NAME'){
    const oldState = {...state}
    oldState.name = action.value
    return oldState
  }
}

//4
const action = {
  type: "UPDATE_NAME",
  value: 'JS'
}

//6 
store.subscribe(()=>{
  console.log('Store Change', store.getState())
})

//5
store.dispatch(action)
// console.log(store.getState())
*/










