import { Dispatch} from 'react'


interface UseState{
    state: string;
    setState: Dispatch<React.SetStateAction<string>>;
}
interface UnionString{
    unionString: "dark" | "light";
    setUnionString: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

interface LightTheme {
    backgroundColor: '#ffffff',
    textColor: '#000000',
  };
  
  interface DarkTheme {
    backgroundColor: '#333333',
    textColor: '#ffffff',
  };
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  }
export type{UseState,UnionString,LightTheme ,DarkTheme,User}