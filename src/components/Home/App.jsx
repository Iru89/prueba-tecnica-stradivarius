import { Header } from "../Header/Header"
import { Main } from "../Main/Main"
import "./css/App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />               
            </header>
            <Main />
        </div>
    );
}

export default App;
