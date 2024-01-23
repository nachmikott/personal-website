import ContactInfo from '@/app/ui/ContactInfo';
import { Suspense } from 'react'
import Navigation from '@/app/ui/Navigation';
import Title from '@/app/ui/Title';

export default function SideBar() {
  return (
    <div className='d-flex flex-column ps-1 border'>
        <Suspense fallback={<p>Loading Title...</p>}>
          <Title />
        </Suspense>
        <Navigation />
        <Suspense fallback={<p>Loading Contact Info...</p>}>
          <ContactInfo />
        </Suspense>
    </div>
  );
}
