'use client';

// import LandingPage from '@/app/ui/Landing';
import SideBar from "@/app/ui/SideBar";
// import HowIBuiltThisToggle from './ui/HowIBuiltThisToggle';
import { HowIBuiltThisProvider, HowIBuiltThisToggle, HowIBuiltThisWrapper } from 'how-i-built-this';


export default function Home() {
  return (
    <main className='flex-grow-1 d-flex align-items-center justify-content-center'>
      <h1>Testing</h1>
      <HowIBuiltThisProvider>
        {/* <SideBar /> */}
        <HowIBuiltThisToggle />
        <HowIBuiltThisWrapper>
          <div> HELLO!</div>
        </HowIBuiltThisWrapper>
      </HowIBuiltThisProvider>
    </main>
  );
}
