import Link from 'next/link'

const links = [
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'How I Built This',
        href: '/how-i-built-this'
    },
    {
        name: 'Coding',
        href: '/points-of-interest/coding'
    },
    { 
        name: 'Cooking', 
        href: '/points-of-interest/cooking'
    },
    { 
        name: 'Travel', 
        href: '/points-of-interest/travel'
    },
    { 
        name: 'Woodworking', 
        href: '/points-of-interest/woodworking'
    },
    { 
        name: 'How I Built This', 
        href: '/how-i-built-this'
    }
];

export default async function Navigation() {
    return (<nav className='d-flex flex-column flex-grow-1 border'>
        <ul className='list-unstyled'>
            {  
                links.map(link => {
                    return <li>
                        <Link key={link.name}
                            href={link.href}
                            className='d-flex align-items-center text-danger'
                        >
                            <div className='pe-1'>{ 'Icon   '} </div>
                            <div>{ link.name }</div>
                        </Link>
                    </li>
                })
            }
        </ul>
    </nav>)
}