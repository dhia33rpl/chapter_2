import Link from "next/link";
import { ReactNode } from "react";
type Prop = {
  children: ReactNode;
};
const Header = (prop: Prop) => {
  return (
    <div>
      {/* header section*/}
      <header className="bg-gray-700 text-soft-brown py-4 sticky top-0">
        <nav className="container mx-auto flex justify-between items-center text-white">
          <Link href="/" className="text-1xl font-bold">
            PORTOFOLIO
          </Link>
          <ul className="flex space-x-4 font-bold">
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
            <li>
              <Link href="/learn-component" className="hover:text-black">
                Learn Componen
              </Link>
            </li>
            <li>
              <Link href="/jenjang" className="hover:text-black">
                Jenjang
              </Link>
            </li>
            <li>
              <Link href="/Alert" className="hover:text-black">
                Alert
              </Link>
            </li>
            <li>
              <Link href="/buttom" className="hover:text-black">
                Button
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
      <footer className="bg-gray-700 text-white text-center py-6">
        Dibuat dengan ❤️ pakai Next.js & Tailwind CSS
      </footer>
      {/* footer section*/}
    </div>
  );
};
export default Header;
