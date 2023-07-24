import React from 'react';
import { AiFillHome, AiFillAppstore, AiOutlineSearch } from 'react-icons/ai';
import { BsMoonFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { GrNotification } from 'react-icons/gr';
import { TbMessage } from 'react-icons/tb';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between px-[20px] py-[20px] h-[50px] border border-b-2'>
        <div className='left flex items-center gap-[30px]'>
          <Link to='/'>
            <span className='font-bold text-xl text-blue-950'>
              Krishna Social
            </span>
          </Link>
          <AiFillHome />
          <BsMoonFill />
          <AiFillAppstore />
          <div className='search flex items-center p-[5px ] border gap-[10px] rounded-xl text-center'>
            <AiOutlineSearch />
            <input
              type='text'
              placeholder='Search'
              className='outline-none w-[500px]'
            />
          </div>
        </div>
        <div className='right flex gap-[20px] cursor-pointer'>
          <CgProfile />
          <TbMessage />
          <GrNotification />
        </div>
      </div>
    </>
  );
};

export default Navbar;
