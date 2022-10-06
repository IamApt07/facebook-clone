import React from 'react';
import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import {BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid';
import { FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';
import {signOut, useSession} from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();
  console.log(session)

  return (
    <div className='sticky top-0 z-50 bg-white flex item-center p-2 lg:px-5 shadow-md'>
      {/*Left*/}
      <div className="flex items-center">
            <Image src="/fblogo.png" width={80} height={50} layout='fixed' alt='facebook logo'/>
      
        <div className="flex items-center rounded-full bg-gray-100 p-2">
        <SearchIcon className=" h-6 text-gray-600"/>
        <input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type="text" placeholder='Search Facebook'/>
      </div>
      </div>
      {/*Center*/}
      <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon active Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
            </div>
      </div>
      {/*Right*/}

      <div className='flex items-center sm:space-x-2 justify-end'>
        <Image
        onClick={signOut}
        className="rounded-full cursor-pointer"
        src={session.user.image}
        height={"40"}
        width={"40"}
        layout="fixed"
        alt='Profile pic'
        />
      <p className='font-semibold pr-3 whitespace-nowrap'>{session.user.name}</p>
      <ViewGridIcon className='icon' />
      <ChatIcon className='icon' />
      <BellIcon className='icon' />
      <ChevronDownIcon className='icon' />
      </div>
    </div>
  )
}

export default Header
