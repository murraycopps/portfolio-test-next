import Link from "next/link";

const Header = () => (
    <header>
        <nav className="bg-gray-800 py-4 shadow-md snap-start">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold text-white">My Site</h1>
              <ul className="flex">
                <li className="mr-6">
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
)

export default Header