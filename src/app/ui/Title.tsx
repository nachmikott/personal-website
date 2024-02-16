import { fetchProfileData } from '@/app/lib/fetches';

interface TitleProps {
  classNames?: string
}
export default async function Title({ classNames }: TitleProps) {
  const results = await fetchProfileData();

  return (
    <div className={ classNames }>{ results.name }</div>
  );
}
