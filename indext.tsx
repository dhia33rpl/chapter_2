import Link from 'next/link';
import { ReactNode } from "react";
type Prop = {
  children: ReactNode;
};
const Header = (prop: Prop) => {
  return (
    <div>
      {/* header section*/}
      <header className="bg-gray-600 text-soft-brown py-4 sticky top-0">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-1xl font-bold">
            PORTOFOLIO 
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/posts" className="hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Portofolio" className="hover:text-black">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-black">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* end of header section*/}

      {/* content section*/}
      <div>{prop.children}</div>
      {/* end of content section*/}

      {/* footer section*/}
      <footer className="bg-gray-600 text-white text-center py-6">
        © 2024 Jejee. Dibuat dengan ❤️ pakai Next.js & Tailwind CSS
      </footer>
      {/* footer section*/}
    </div>
  );
};
export default Header;
