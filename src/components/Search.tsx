import {useState} from "react";
import {JokeSearchResponse} from "../types/Jokes.ts";
import './Search.css'
import {ListItem} from "./ListItem.tsx";

export function Search() {
    const [jokeTerm, setJokeTerm] = useState('')
    const [jokeResults, setJokeResults] = useState<JokeSearchResponse | null>(null)

    const getJokesByTerm = async () => {
        const searchResult = await fetch(`https://icanhazdadjoke.com/search?term=${jokeTerm}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
        setJokeResults(await searchResult.json())
    }

    return (<>
        <div className={'search'}><input className={'joke-search-input'} type={"text"}
                                         placeholder={'Enter a search term'}
                                         onChange={(e) => setJokeTerm(e.target.value)} value={jokeTerm}/>
            <button onClick={getJokesByTerm}>Find me some jokes</button>
        </div>

        {jokeResults?.results && <ListItem jokes={jokeResults.results} listType={'search'}/>}</>)
}