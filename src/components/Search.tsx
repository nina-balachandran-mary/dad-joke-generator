import {useState} from "react";
import {JokeSearchResponse} from "../types/Jokes.ts";
import './Search.css'
import {ListItem} from "./ListItem.tsx";

export function Search() {
    const [jokeTerm, setJokeTerm] = useState('')
    const [jokeResults, setJokeResults] = useState<JokeSearchResponse | null>(null)
    const [showRetryMessage, setShowRetryMessage] = useState<boolean>(false)

    const getJokesByTerm = async () => {
        const searchResult = await fetch(`https://icanhazdadjoke.com/search?term=${jokeTerm}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })

        searchResult.json().then(data => {
            setJokeResults(data)
            if (data.results.length === 0) {
                setShowRetryMessage(true)
            }
        })
    }

    const updateJokeSearch = (value: string) => {
        setJokeTerm(value)
        setShowRetryMessage(false)
    }

    return (<>
        <div className={'search'}><input className={'joke-search-input'} type={"text"}
                                         placeholder={'Enter a search term'}
                                         onChange={(e) => updateJokeSearch(e.target.value)} value={jokeTerm}/>
            <button onClick={getJokesByTerm}>Find me some jokes</button>
        </div>

        {jokeResults?.results &&
            <ListItem jokes={jokeResults.results} listType={'search'}/>}
        {showRetryMessage && <h3>No jokes found</h3>}
    </>)

}