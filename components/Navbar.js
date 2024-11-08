import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex space-x-4 justify-center">
        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`}>
              <a className="text-white hover:text-secondary transition duration-300">
                {item}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 