import {Link} from "react-router-dom";
import './NotFound.css'

export function NotFound() {
    return (<div className={'not-found'}>
        <h1>404: Oops, You’ve Taken a Wrong Turn!</h1>

        <h3>Looks like you’ve landed in pun-charted territory.</h3>

        <p>But don’t worry, we’ll still deliver a dad joke:

            Why don’t skeletons fight each other?
            Because they don’t have the guts!</p>

        <p> Want to get back on track? Click here to head <Link to={'/'}>home</Link> and find more groan-worthy gems!
        </p>
    </div>)
}