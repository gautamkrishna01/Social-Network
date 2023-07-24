import React from 'react';
import Friends from '../../assets/1.png';
import Groups from '../../assets/2.png';
import Market from '../../assets/3.png';
import Watch from '../../assets/4.png';
import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gaming from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import Messages from '../../assets/10.png';
import Tutorials from '../../assets/11.png';
import Courses from '../../assets/12.png';
import Fund from '../../assets/13.png';

const Leftbar = () => {
  return (
    <>
      <div className='flex-2'>
        <div className='p-[20px]'>
          <div className='flex flex-col gap-[20px]'>
            <div className='flex gap-[10px] items-center'>
              <img
                src={Friends}
                alt=''
                className='w-[30px] h-[30px] rounded-[50%]'
              />
              <span>Friends</span>
            </div>
            <div className='flex gap-[10px] items-center'>
              <img
                src={Groups}
                alt=''
                className='w-[30px] h-[30px] rounded-[50%]'
              />
              <span>Groups</span>
            </div>
            <div className='flex gap-[10px] items-center'>
              <img
                src={Market}
                alt=''
                className='w-[30px] h-[30px] rounded-[50%]'
              />
              <span>Marketplace</span>
            </div>
            <div className='flex gap-[10px] items-center'>
              <img
                src={Watch}
                alt=''
                className='w-[30px] h-[30px] rounded-[50%]'
              />
              <span>Watch</span>
            </div>
            <div className='flex gap-[10px] items-center'>
              <img
                src={Memories}
                alt=''
                className='w-[30px] h-[30px] rounded-[50%]'
              />
              <span>Memories</span>
            </div>
          </div>
          <hr className='my-[20px]' />
          <div className='flex flex-col gap-[20px]'>
            <span>Your shortcuts</span>
            <div className='flex gap-[10px] items-center'>
              <img src={Events} className='w-[30px] h-[30px] rounded-[50%]' />
              <span>Events</span>
            </div>
            <div className='flex gap-[10px] items-center'>
              <img src={Gaming} className='w-[30px] h-[30px] rounded-[50%]' />
              <span>Gaming</span>
            </div>
            <div className='flex gap-[10px] items-center'>
              <img src={Gallery} className='w-[30px] h-[30px] rounded-[50%]' />
              <span>Gallery</span>
            </div>
            <div className='flex gap-[10px] items-center'>
              <img src={Videos} className='w-[30px] h-[30px] rounded-[50%]' />
              <span>Videos</span>
            </div>
            <div className='flex gap-[10px] items-center'>
              <img src={Messages} className='w-[30px] h-[30px] rounded-[50%]' />
              <span>Messages</span>
            </div>
          </div>
          <hr />
          <div className='flex flex-col gap-[20px]'>
            <span>Others</span>
            <div className='flex gap-[10px] items-center'>
              <img src={Fund} className='w-[30px] h-[30px] rounded-[50%]' />
              <span>Fundraiser</span>
            </div>
            <div className='flex gap-[10px] items-center'>
              <img
                src={Tutorials}
                className='w-[30px] h-[30px] rounded-[50%]'
              />
              <span>Tutorials</span>
            </div>
            <div className='flex gap-[10px] items-center'>
              <img src={Courses} className='w-[30px] h-[30px] rounded-[50%]' />
              <span>Courses</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftbar;
