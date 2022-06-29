import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss"

const App: React.FC = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Home</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;