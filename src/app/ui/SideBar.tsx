import ContactInfo from './ContactInfo';
import Navigation from './Navigation';
import Title from './Title';
export default async function SideBar() {
  return (
    <div className='d-flex flex-column ps-1 border'>
        <Title />
        <Navigation />
        <ContactInfo />
    </div>
  );
}
