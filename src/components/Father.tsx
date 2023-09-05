import Child from "./Child";
import { textContext } from "./GrandPa"
import { useContext } from "react"

export default function Father() {
    const context = useContext(textContext)
    if(!context) return null
  return (
    <div id="container">
    <button onClick={()=>{context.setState("i love react")}} id="buttonChange">Click here</button>
    <Child/>
    </div>
  )
}
