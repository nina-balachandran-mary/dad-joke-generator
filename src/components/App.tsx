import './App.css'
import {Footer} from "./Footer.tsx";
import {Header} from "./Header.tsx";
import {Route, Routes} from "react-router-dom";
import {Random} from "./Random.tsx";
import {Search} from "./Search.tsx";
import {History} from "./History.tsx";
import {Home} from "./Home.tsx";
import {JokeByID} from "./JokeByID.tsx";
import {NotFound} from "./NotFound.tsx";

function App() {

    return (
        <div>
            <Header/>
            <main className={'site-page'}>
                <Routes>
                    <Route path="/*" element={<Home/>}/>
                    <Route path="/random" element={<Random/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/joke/:jokeID" element={<JokeByID/>}/>
                    <Route path="/404" element={<NotFound/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App
