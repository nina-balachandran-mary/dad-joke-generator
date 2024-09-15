import './ShareWidget.css'
import FBLogo from '/assets/images/facebook-round-color-icon.svg'
import XLogo from '/assets/images/x-social-media-logo-icon.svg'
import {LocalStorageValueType} from "../types/Storage.ts";

export function ShareWidget() {
    const linkToJoke = location.href
    const markAsShared = (sharedOn: string) => {
        const jokeID = (location.pathname.split('/')[2])
        const storedJokes: Record<string, LocalStorageValueType> | null = JSON.parse(localStorage.getItem('jokes') || '{}')
        if (!storedJokes) {
            return
        }
        storedJokes[jokeID]['shared'] = true;
        storedJokes[jokeID]['shared_on'] = new Date().toString();
        storedJokes[jokeID]['shared_via'] = 'url on ' + sharedOn;

        localStorage.setItem('jokes', JSON.stringify(storedJokes));
        navigator.clipboard.writeText(linkToJoke)
    }

    return <div className={'share-widget'}>
        <a className="resp-sharing-button__link"
           href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener"
           aria-label="share-url-with-facebook" onClick={() => {
            markAsShared('facebook')
        }}>
            <img className="share-widget__logo" src={FBLogo} alt={'facebook-logo-icon'}/>
        </a>

        <a className="resp-sharing-button__link"
           href="https://x.com/intent/post?text=Super+fast+and+easy+Social+Media+Sharing+Buttons.+No+JavaScript.+No+tracking.&url=http%253A%252F%252Fsharingbuttons.io"
           target="_blank" rel="noopener" aria-label="share-url-with-x" onClick={() => {
            markAsShared('X')
        }}>
            <img className="share-widget__logo" src={XLogo} alt={'x-social-media-logo-icon'}/>
        </a>
    </div>
}