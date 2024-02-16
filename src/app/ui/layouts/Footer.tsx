import Link from 'next/link'

interface FooterProps {
    className?: string
}

const links = [
    {
        name: 'Resume',
        href: '/resume'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Now',
        href: '/now'
    },

];

export default function Footer({ className }: FooterProps) {
    return <div className={ className || 'd-flex' }>
        <a href='https://linkedin.com/in/nachmikott' target="_blank" >
            <i className="p-2 bi bi-linkedin"/>
        </a>
        <a className='p-2' href='https://github.com/nachmikott' target="_blank" >
            <i className="bi-github" />
        </a>
        <a href="mailto:nachmikott@gmail.com" target="_blank" >
            <i className="p-2 bi bi-google" />
        </a>
        <Link 
            key={'resume'}
            href={'/resume'}
            className='p-2 bi bi-file-earmark-person-fill'>
        </Link>
    </div>
}