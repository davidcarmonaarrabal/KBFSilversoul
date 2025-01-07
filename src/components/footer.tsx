import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mechanical Keyboards Fun. All rights reserved.
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacidad
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
