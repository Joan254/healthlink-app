import Link from 'next/link';
import Image from 'next/image';
import Logo from '/public/icons/logo-black-transparent.png';
import { Button } from 'antd';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={Logo} alt="HealthLink logo" className="h-10 lg:h-12 w-auto" priority />
          </Link>
        </div>
        <div className="flex items-center space-x-10">
          <ul className="flex space-x-4">
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
            <Button type="default" size="large" shape="round">
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
