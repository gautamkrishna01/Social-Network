import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className='h-screen bg-[#84afe7] flex justify-center items-center'>
        <div className='flex w-[50%] rounded-lg bg-white min-h-[600px] overflow-hidden'>
          <div className='flex-1 bg-black text-white p-[50px] flex flex-col gap-[30px]'>
            <h1 className='text-3xl'>Krishna Social</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              facilis voluptate a neque, tenetur odit necessitatibus quidem
              temporibus officia libero quasi!
            </p>
            <span>Don't you have an accoung?</span>
            <button
              className='border w-[50%] p-[10px] cursor-pointer  font-bold
             '
            >
              <Link to='/login'>Login</Link>
            </button>
          </div>
          <div className='flex-1 p-[50px] flex flex-col gap-[50px] justify-center'>
            <h1>Register</h1>
            <form className='flex flex-col'>
              <input
                type='text'
                placeholder='Username'
                className=' border-b-2  px-[10px] py-[20px] outline-none'
              />
              <input
                type='email'
                placeholder='Email'
                className=' border-b-2  px-[10px] py-[20px] outline-none'
              />
              <input
                type='password'
                placeholder='Password'
                className='border-b-2  px-[10px] py-[20px] outline-none'
              />
              <button className='border w-[50%] bg-purple-500 text-white p-[10px] cursor-pointer  font-bold my-4'>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
