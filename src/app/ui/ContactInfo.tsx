import { fetchProfileData } from '@/app/lib/fetches';
import HowIBuiltThisWrapper from '@/app/ui/HowIBuiltThisWrapper';

export default async function ContactInfo() {
  const results = await fetchProfileData(); 
  
  return (
    <HowIBuiltThisWrapper>
      <div className='d-flex flex-column border p-3 '>
        <div>{ results.name }</div>
        <div>{ results.email }</div>
        <div>{ results.github }</div>
        <div>{ results.linkedin }</div>
        <div>{ results.resume }</div>
      </div>
    </HowIBuiltThisWrapper>
  );
}
