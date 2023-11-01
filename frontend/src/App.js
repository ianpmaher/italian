import { Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Home from "./pages/Home/Home";
import EnglishToItalian from "./pages/EnglishToItalian/EnglishToItalian";
import ItalianToEnglish from "./pages/ItalianToEnglish/ItalianToEnglish";
import Header from "./components/Header/Header";



function App() {
    return (
        <>
            <div className="App" >
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/english" element={<EnglishToItalian/>} />
                    <Route exact path="/italian" element={<ItalianToEnglish/>} />
                    
                </Routes>
            </div>
        </>
    );
}

export default App;