import {JokeResponse} from "../types/Jokes.ts";
import './ListItem.css'
import {LocalStorageValueType} from "../types/Storage.ts";
import {Link} from "react-router-dom";

export interface ListItemProps {
    jokes: JokeResponse[] | LocalStorageValueType[]
    listType: 'search' | 'history'
}

export function ListItem({jokes, listType}: ListItemProps) {
    return (<div className={'joke-list'}>
        {jokes.map(joke => <Link to={`/joke/${joke.id}`} className={'joke-text'} key={joke.id}><p className={'text-truncate'}
        >{listType === 'search' ? (joke as JokeResponse).joke : (joke as LocalStorageValueType).text}</p>
        </Link>)}</div>)
}