
import Link from 'next/link'

const links = [
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
    }
];

export default function PointsOfInterest() {
    return (
    <div className='border p-3'>
        This Is the Points Of Interest Page 
        { 
            links.map(link => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                    >
                        <p>{`Go To ${link.name}`}</p>
                    </Link>
                );
            })
        }
    </div>
  );
}
