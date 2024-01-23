import { fetchProfileData } from '@/app/lib/fetches';

export default async function Title() {
  const results = await fetchProfileData();

  return (
    <div className='border p-1'>{ `${results.name} Personal Website` }</div>
  );
}
