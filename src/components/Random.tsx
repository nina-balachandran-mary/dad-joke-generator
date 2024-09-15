import {ShareWidget} from "./ShareWidget.tsx";
import {useEffect, useState} from "react";
import {JokeResponse} from "../types/Jokes.ts";
import {LocalStorageValueType} from "../types/Storage.ts";
import {RandomImage} from "./RandomImage.tsx";
import './Random.css'

export function Random() {
    const [jokeObject, setJokeObject] = useState<JokeResponse | null>(null)
    const [showNewJoke, setShowNewJoke] = useState<boolean>(false)

    const getRandomJoke = async () => {
        const result = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
        return await result.json();
    }

    useEffect(() => {
        const jokesStorage = JSON.parse(localStorage.getItem('jokes') ||
            '{}')

        getRandomJoke().then(data => {
            setJokeObject(data)
            // Do not add overwrite localStorage if joke has been viewed previously
            if (jokesStorage[data.id]) {
                return;
            }
            jokesStorage[data.id] = {
                id: data.id,
                shared: false,
                text: data.joke,
                shared_on: null,
                shared_via: null
            } as LocalStorageValueType

            localStorage.setItem('jokes', JSON.stringify(jokesStorage))
            setShowNewJoke(false)
        })
    }, [showNewJoke])

    return <div className={'random'}>
        {jokeObject?.joke && <h3>{jokeObject.joke}</h3>}
        <RandomImage/>
        <button onClick={() => setShowNewJoke(true)}>Show me another one!</button>
        {jokeObject?.joke && <ShareWidget/>}
    </div>
}