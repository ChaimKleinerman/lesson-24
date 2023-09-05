//libraries
import {  useState } from 'react'
import { createContext } from 'react'
import Father from './Father'
import { UseState } from './Types'
//create context
export const textContext = createContext<UseState|null>(null)
//app function
export default function GrandPa() {
   //use state 
  const [state,setState] = useState("hello world")
  

  return (
    <textContext.Provider value = {{state,setState}}>
      <Father/>
    </textContext.Provider>
  )
}
