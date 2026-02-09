import { NavLink } from "react-router-dom"

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
    return (
        <nav className='h-12 bg-white w-full  flex  gap-8 font-bold text-blue-900 items-center justify-center'>
            {items.map((item, index) => (
                <NavLink key={item.name + index} to={item.url}>{item.name}</NavLink>
            ))}

        </nav>
    )
}

export default Nav