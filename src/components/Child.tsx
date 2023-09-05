//modules
import { textContext } from "./GrandPa"
import { useContext } from "react"
//function child
export default function Child() {
    const context = useContext(textContext)
    if(!context) return null
  return (
    
<div id="text">{context.state}</div>
  )
}
