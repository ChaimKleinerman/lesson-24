//libraries
import { useState,createContext } from "react";
import { UnionString } from "./Types";
import ThemeSwitche from "./ThemeSwitche";
//context
export const sateContext = createContext<UnionString | null>(null)
//function THemeContext
export default function ThemeContext() {
    const [unionString, setUnionString] = useState<"light"|"dark">('light');

   
    return (
        <sateContext.Provider value = {{unionString, setUnionString}}>
            <ThemeSwitche/>
        </sateContext.Provider>
    );
}
