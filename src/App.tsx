//libraries
import GrandPa from "./components/GrandPa";
import ThemeContext from "./components/ThemeContext";
import UserContext from "./components/Header";
import Header from "./components/Header";
//app function
function App() {
    return (
        <div>
            <GrandPa />
            <ThemeContext />
        <Header/>

        </div>
    );
}

export default App;
