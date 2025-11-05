import React from 'react';
import { motion } from 'framer-motion'; // ✅ Correct import

function Navigation() {
  return (
    <ul className='nav-ul flex flex-col sm:flex-row'>
      <li className='nav-li'><a className="nav-link" href="#home">HOME</a></li>
      <li className='nav-li'><a className="nav-link" href="#aboutme">ABOUT</a></li>
      <li className='nav-li'><a className="nav-link" href="#work">WORK</a></li>
      <li className='nav-li'><a className="nav-link" href="#contacts">CONTACT</a></li>
    </ul>
  );
}

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='fixed inset-x-0 z-50 backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          
          {/* Logo */}
          <a
            className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'
            href="/"
          >
            SAM
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className='w-6 h-6'
              alt="Menu icon"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className='hidden sm:flex'>
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className='block overflow-hidden text-center sm:hidden'
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ maxHeight: "100vh" }}
        >
          <nav className='pb-5'>
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
