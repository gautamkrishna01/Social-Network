// import React from 'react';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// const Navbar = () => {
//   return (
//     <>
//       <div>
//         <AiOutlineShoppingCart />
//         <h2>Shops</h2>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const resp = await axios.get('https://fakestoreapi.com/products');
      setData(resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {data.map((value) => (
          <div key={value.id} className='grid grid-cols-4 gap-4'>
            <img src={value.image} className='w-[50px]' />
            <p>{value.id}</p>

            <p>{value.title}</p>
            <button className='border  w-[100px] bg-red-500 text-white rounded-lg'>
              {value.price}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
