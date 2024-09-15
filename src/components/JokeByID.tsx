import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {LocalStorageValueType} from "../types/Storage.ts";
import {Error} from "./Error.tsx";
import {RandomImage} from "./RandomImage.tsx";
import './JokeByID.css'
import {ShareWidget} from "./ShareWidget.tsx";

export function JokeByID() {
    const location = useLocation()
    const jokeID = location.pathname.split('/')[2]
    const [joke, setJoke] = useState<LocalStorageValueType | null>()

    const getJokeById = async (jokeID: string) => {
        const result = await fetch(`https://icanhazdadjoke.com/j/${jokeID}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
        return await result.json();
    }

    useEffect(() => {
        // Check whether joke exists in storage, if not call API with joke ID
        const storedJokes = JSON.parse(localStorage.getItem('jokes') || '{}')
        if (storedJokes[jokeID]) {
            setJoke(storedJokes[jokeID])
        } else {
            getJokeById(jokeID).then((result) => result.json(), () => <Error/>).then(data => {
                storedJokes[data.id] = {
                    id: data.id,
                    shared: false,
                    text: data.joke,
                    shared_on: null,
                    shared_via: null
                } as LocalStorageValueType
                localStorage.setItem('jokes', JSON.stringify(storedJokes))
                setJoke(storedJokes[data.id])
            })
        }
    }, [location, jokeID]);

    return <div className={'joke-by-id'}>
        {joke && <><h3>{joke.text}</h3><RandomImage/><ShareWidget/></>}
        {!joke && <Error/>}
    </div>
}