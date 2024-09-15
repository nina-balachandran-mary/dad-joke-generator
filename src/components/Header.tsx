import './Header.css'
import LaughingFace from '/assets/images/funnies.png'

import {Navbar} from "./Navbar.tsx";

export function Header() {
    return (<header>
        <img className={'site-logo'} src={LaughingFace} alt={'site-logo'}/>
        <Navbar/>
    </header>)
}