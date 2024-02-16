import Link from 'next/link'

const links = [
    {
        name: 'Resume',
        href: '/resume'
    },
    {
        name: 'Points Of Interest',
        href: '/points-of-interest'
    },
    {
        name: 'Now',
        href: '/now'
    },

];

export default async function Navigation() {
    return (<nav>
        <ul className='list-unstyled d-flex justify-content-end'>
            {  
                links.map(link => {
                    return <li>
                        <Link key={link.name}
                            href={link.href}
                            className='d-flex align-items-center px-1'
                        >
                            { link.name }
                        </Link>
                    </li>
                })
            }
        </ul>
    </nav>);
}