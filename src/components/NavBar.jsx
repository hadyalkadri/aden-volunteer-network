import { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#what-we-do' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-md border-b border-brand-greyLight/80 transition-all">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center h-full">

          <Logo />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-dark font-semibold text-sm tracking-wide hover:text-brand-orange transition-colors uppercase font-heading"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-dark hover:text-brand-orange focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-greyLight px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-brand-dark font-bold text-base hover:text-brand-orange transition-colors uppercase font-heading py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}