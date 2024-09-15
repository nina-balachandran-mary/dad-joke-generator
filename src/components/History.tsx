import {useEffect, useState} from "react";
import {LocalStorageValueType} from "../types/Storage.ts";
import {ListItem} from "./ListItem.tsx";

export function History() {
    const [jokes, setJokes] = useState<Record<string, LocalStorageValueType>>({})
    useEffect(() => {
        if (localStorage.getItem('jokes')) {
            setJokes(JSON.parse(localStorage.getItem('jokes') || '{}'))
        }
    }, []);
    return <div>
        {jokes && <ListItem jokes={Object.values(jokes)} listType={'history'}/>}
    </div>
}