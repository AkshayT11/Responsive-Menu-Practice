import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

import './App.css';

const navList = (
  <ul className="lg:flex md:flex sm:flex lg:gap-4 md:gap-4 sm:gap-4 py-3  text-white font-semibold text-lg  ">
    <li>Home</li>
    <li>About Company</li>
    <li>Services</li>
    <li>Contact Us</li>
  </ul>
);

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="main lg:flex lg:justify-between md:flex md:justify-between sm:flex sm:justify-between sm:items-center py-3 lg:items-center md:items-center px-4 bg-orange-700 ">
        {/* Left */}
        <div className="left">
          <div className="flex items-center justify-between">
            {/* logo */}
            <img
              className="h-[60px]"
              src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?size=626&ext=jpg&ga=GA1.1.1070900490.1700124945&semt=ais"
              alt="logo"
            />

            {/* for Close Button */}
            {open ? (
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden md:hidden sm:hidden"
              >
                <IoClose className="text-white text-2xl" />
              </button>
            ) : (
              // Menu Icon
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden md:hidden sm:hidden"
              >
                {' '}
                <IoMenu className="text-white  " size={30} />{' '}
              </button>
            )}
          </div>
        </div>
        {/* Right Dekstop */}
        <div className="right hidden lg:block md:block sm:block ">
          {navList}
        </div>
        {/* Mobile Navlist */}
        {open && (
          <div className="mobile_nav lg:hidden md:hidden sm:hidden">
            {navList}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
