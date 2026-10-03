import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E8E8E3]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="text-sm font-semibold tracking-wider text-[#171717] hover:text-[#666666] transition-colors"
        >
          AARNAV
        </a>

        {/* Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-[#666666]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="hover:text-[#171717] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex px-3.5 py-1.5 text-xs font-medium text-[#171717] bg-transparent hover:bg-[#F4F5F2] border border-[#E8E8E3] rounded-md transition-colors"
          >
            Download CV
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-[#666666] hover:text-[#171717]"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drop menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-b border-[#E8E8E3] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm text-[#666666] hover:text-[#171717] py-1"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenCvModal();
            }}
            className="mt-2 w-full py-2 text-xs font-medium text-[#171717] bg-white border border-[#E8E8E3] rounded-md"
          >
            Download CV
          </button>
        </div>
      )}
    </header>
  );
};
