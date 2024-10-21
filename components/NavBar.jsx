"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '/public/icons/logo-black-transparent.png';
import { Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={Logo} alt="HealthLink logo" className="h-10 lg:h-12 w-auto" priority />
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <CloseOutlined className="text-2xl" /> : <MenuOutlined className="text-2xl" />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-10 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent z-10 p-6 lg:p-0 shadow-lg lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            <li>
              <Link href="/" className="text-lg text-blue-600 hover:text-blue-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg text-blue-600 hover:text-blue-800">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-lg text-blue-600 hover:text-blue-800">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg text-blue-600 hover:text-blue-800">
                Contact
              </Link>
            </li>
          </ul>

          <Link href="/login">
            <Button
              type="default"
              size="large"
              shape="round"
              className="w-full lg:w-auto mt-4 lg:mt-0"
            >
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
