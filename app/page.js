import fs from 'fs';
import Link from 'next/link';

export default function Home() {
  const appDir = 'app';

  const subDirs = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  return (
    <div className='w-full md:w-[40%] p-5 bg-zinc-800 m-4 rounded-2xl space-y-2'>
      <h1 className='text-2xl font-bold border-b pb-2 text-white'>Projects</h1>
      {subDirs.map((dir, index) => (
        <Link key={dir} className='block text-2xl hover:underline text-sky-500' href={dir}>{index + 1}. {dir}</Link>
      ))}
    </div>
  )
}
