//libraries
import {useContext} from "react"
import { dataContext } from "./Header"
import { User } from "./Types"
//function
export default function UserContext() {
    const context = useContext<User|null>(dataContext)
  return (
    <div>
        id:{context?.id}
        <br />
        name:{context?.name}
        <br />
        userName:{context?.username}
    </div>
  )
}
