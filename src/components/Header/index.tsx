import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import clsx from 'clsx';


export default function Header() {
  return (
    <nav className="w-full bg-transparent flex items-center justify-between px-8 py-4 fixed left-0 top-0 z-10">
      <div className="flex items-center mr-10">
        <span className="bg-white px-2 py-1 font-bold italic text-lg text-gray-800 rounded-sm">NewDrip</span>
      </div>
      <div className='w-full flex justify-between'>
        <ul className="flex items-center gap-8 text-white font-semibold text-lg">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>search</li>
        </ul>
        <ul className='flex gap-4'>
          <li className="ml-4">
            <span className="font-normal">wishlist <span className="text-xs">(0)</span></span>
          </li>
          <li>
            <span className="font-normal">cart <span className="text-xs">(0)</span></span>
          </li>
          <li className={clsx(
          'flex items-center justify-center',
          'bg-gray-300 text-black',
          'font-normal  rounded-4xl w-7 h-7',
          )}>
            <FiUser />
          </li>
        </ul>
      </div>
    </nav>
  );
} 