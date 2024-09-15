import './ShareWidget.css'
import FBLogo from '/assets/images/facebook-round-color-icon.svg'
import XLogo from '/assets/images/x-social-media-logo-icon.svg'

export function ShareWidget() {
    const linkToJoke = location.href

    return <div className={'share-widget'}>
        <a className="resp-sharing-button__link"
           href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener"
           aria-label="" onClick={() => {navigator.clipboard.writeText(linkToJoke)}}>
            <img className="share-widget__logo" src={FBLogo} alt={'facebook-logo-icon'} />
        </a>

        <a className="resp-sharing-button__link"
           href="https://x.com/intent/post?text=Super+fast+and+easy+Social+Media+Sharing+Buttons.+No+JavaScript.+No+tracking.&url=http%253A%252F%252Fsharingbuttons.io"
           target="_blank" rel="noopener" aria-label="">
            <img className="share-widget__logo"  src={XLogo} alt={'x-social-media-logo-icon'}/>
        </a>
    </div>
}