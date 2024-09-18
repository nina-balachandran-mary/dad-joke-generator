import './Navbar.css'
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

export function Navbar() {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const location = useLocation();

    useEffect(() => {
        for (const item in navItems) {
            if (navItems[item]['path'] === location.pathname) {
                setCurrentPage(parseInt(item))
                break;
            }
        }
    }, [location]);

    const navItems = [{name: 'Home', path: '/'},
        {name: 'Search', path: '/search'},
        {name: 'Instant Joke', path: '/random'},
        {name: 'History', path: '/history'}]

    const changeTabs = (tabIndex: number) => {
        setCurrentPage(tabIndex)
    }

    return (
        <nav className={"navbar navbar-default"}>
            {navItems.map((item, i) => (
                <Link to={item.path} key={i} className={`nav-link ${currentPage === i && 'active'}`}
                      onClick={() => changeTabs(i)}>{item.name}</Link>))}
        </nav>
    )
}