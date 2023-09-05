//libraries
import { useEffect, useState,createContext} from "react";
import { User } from "./Types";
import UserContext from "./UserContext";
//context
export const dataContext = createContext<User | null>(null)

//main function
export default function Header() {
    //use state
    const [state, setState] = useState<User | null>(null);
    //use effect
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((json) => json.json())
            .then((data) => setState(data[0]));
    }, []);
    console.log(state);

    return <dataContext.Provider value = {state}>
        <UserContext/>
        </dataContext.Provider>;
}
