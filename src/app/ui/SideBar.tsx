import ContactInfo from '@/app/ui/ContactInfo';
import { Suspense } from 'react'
import Navigation from '@/app/ui/Navigation';
import Title from '@/app/ui/Title';
import Placeholder from 'react-bootstrap/Placeholder';

export default function SideBar() {
  return (
    <div className='d-flex flex-column ps-1 border'>
        <Suspense fallback={ <Placeholder as="p" animation="glow"/> }>
          <Title />
        </Suspense>
        <Navigation />
        <Suspense fallback={
            <Placeholder as="p" animation="glow">
              <Placeholder xs={7} /> 
              <Placeholder xs={4} />
              <Placeholder xs={4} />
              <Placeholder xs={6} />
            </Placeholder>
          }>
          <ContactInfo />
        </Suspense>
    </div>
  );
}
