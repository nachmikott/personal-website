'use client';

import SkipToMain from '@/app/ui/accessibility/SkipToMain';
import Header from '@/app/ui/layouts/Header';
import Footer from '@/app/ui/layouts/Footer';
import { HowIBuiltThisProvider, HowIBuiltThisToggle, HowIBuiltThisWrapper } from 'how-i-built-this';


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

export default function AppLayout({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <HowIBuiltThisProvider>
            <SkipToMain />
            
            <Header className='d-flex p-4 border'/>
            <div className='flex-grow-1'>
                {children}
            </div>
            <HowIBuiltThisToggle />
            <HowIBuiltThisWrapper>
                <Footer className='d-flex align-items-center justify-content-center border'/>
            </HowIBuiltThisWrapper>
        </HowIBuiltThisProvider>);
}