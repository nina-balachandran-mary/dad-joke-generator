import './Home.css'
import {Link} from "react-router-dom";
import DudePresentingSomething from '/assets/images/dudes-tada-man-in-suit-presenting-something.png'

export function Home() {
    return <div className={'home'}>
        <h1>Get Your Daily Dose of Dad Wit – Where Every Click is a Groan!</h1>
        <section className={'cta-text-button'}><img
            src={DudePresentingSomething}
            alt={'image-tada-man-in-suit-presenting-something'}/>
            <button><Link to={'/random'}>Click here for a random joke</Link></button>
        </section>
    </div>
}