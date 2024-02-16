
import Title from "../Title";
import Navigation from "../Navigation";
import { Suspense } from "react";
import { HowIBuiltThisWrapper } from 'how-i-built-this';

interface HeaderProps {
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

export default async function Header({ className }: HeaderProps) {
    return <div className={ className || 'd-flex' }>
        <HowIBuiltThisWrapper>
            <Suspense fallback={ <p className='flex-grow-1'>Loading</p> }>
                <Title classNames='flex-grow-1'/>
            </Suspense>
        </HowIBuiltThisWrapper>
        <Navigation />
    </div>
}