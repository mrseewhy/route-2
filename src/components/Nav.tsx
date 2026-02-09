import { NavLink } from "react-router-dom"
import { useAppContext } from "../context/AppContext"
import { useContext } from "react"

interface Items {
    url: string,
    name: string
}

const Nav = () => {
    const items: Items[] = [
        { url: '/', name: 'Home' },
        { url: '/about', name: 'About Us' },
        { url: '/services', name: 'Our Services' },
        { url: '/forms', name: 'All Forms' },
        { url: '/profiles', name: 'All Profiles' },
        { url: '/contact', name: 'All Contacts' },
        { url: '', name: '' },
    ]
    const { dark, setDark } = useAppContext();
    return (
        <nav className='h-12 bg-white w-full  flex  gap-8 font-bold text-blue-900 items-center justify-center'>
            {items.map((item, index) => (
                <NavLink key={item.name + index} to={item.url}>{item.name}</NavLink>
            ))}
            <button className="bg-blue-600 text-blue-50 px-10 py-2" onClick={() => setDark(pre => !pre)}>{dark ? 'dark' : 'light'}</button>

        </nav>
    )
}

export default Nav