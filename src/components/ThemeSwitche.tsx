//libraries
import { useContext } from "react"
import {sateContext} from "./ThemeContext"
import TitleAndText from "./TitleAndText"
import { LightTheme,DarkTheme } from "./Types"
//create style
const dark:DarkTheme ={
    backgroundColor: '#333333',
    textColor: '#ffffff',
}
const light:LightTheme = {
    backgroundColor: '#ffffff',
    textColor: '#000000',
}

//function
export default function ThemeSwitche() {
    //props
let flag:"light"|"dark" = "light"
const context = useContext(sateContext)
let myStyle:LightTheme|DarkTheme = light
if(!context) return null
if(context.unionString ==="light")
{myStyle = dark
flag = "dark"}
 
  return (
    <div id="switch">
        <TitleAndText myStyle ={myStyle}/>
<button onClick={()=>{context.setUnionString(flag)}}>switch</button>
    </div>
  )
}
