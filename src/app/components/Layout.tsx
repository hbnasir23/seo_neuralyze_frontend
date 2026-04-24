import { Outlet, useNavigate, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/analyze', label: 'Analyze' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <h1
              onClick={() => navigate('/')}
              className="text-black text-[16px] sm:text-[18px] cursor-pointer hover:opacity-70 transition-opacity"
              style={{ fontWeight: 600 }}
            >
              SEO Neuralyze
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <nav className="flex gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className={`text-[14px] bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity ${
                      location.pathname === link.path ? 'text-black' : 'text-[#6B7280]'
                    }`}
                    style={{ fontWeight: location.pathname === link.path ? 500 : 400 }}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              <button
                onClick={() => navigate('/analyze')}
                className="bg-black text-white px-4 lg:px-6 py-2 text-[13px] lg:text-[14px] hover:bg-[#1a1a1a] transition-colors"
                style={{ fontWeight: 500 }}
              >
                analyze now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-black bg-transparent border-none cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-[#E5E7EB]">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      navigate(link.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left text-[15px] bg-transparent border-none cursor-pointer py-2 ${
                      location.pathname === link.path ? 'text-black' : 'text-[#6B7280]'
                    }`}
                    style={{ fontWeight: location.pathname === link.path ? 500 : 400 }}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    navigate('/analyze');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-black text-white px-6 py-3 text-[14px] hover:bg-[#1a1a1a] transition-colors mt-2"
                  style={{ fontWeight: 500 }}
                >
                  analyze now
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-black text-[15px] sm:text-[16px] mb-3 sm:mb-4" style={{ fontWeight: 600 }}>
                SEO Neuralyze
              </h3>
              <p className="text-[#6B7280] text-[12px] sm:text-[13px] leading-relaxed">
                Neural semantic analysis for enterprise publishers.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-black text-[13px] sm:text-[14px] mb-3 sm:mb-4" style={{ fontWeight: 500 }}>
                Product
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate('/analyze')}
                    className="text-[#6B7280] text-[12px] sm:text-[13px] hover:text-black bg-transparent border-none cursor-pointer"
                  >
                    Analyze
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/features')}
                    className="text-[#6B7280] text-[12px] sm:text-[13px] hover:text-black bg-transparent border-none cursor-pointer"
                  >
                    Features
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-black text-[13px] sm:text-[14px] mb-3 sm:mb-4" style={{ fontWeight: 500 }}>
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate('/')}
                    className="text-[#6B7280] text-[12px] sm:text-[13px] hover:text-black bg-transparent border-none cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/contact')}
                    className="text-[#6B7280] text-[12px] sm:text-[13px] hover:text-black bg-transparent border-none cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-black text-[13px] sm:text-[14px] mb-3 sm:mb-4" style={{ fontWeight: 500 }}>
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate('/privacy')}
                    className="text-[#6B7280] text-[12px] sm:text-[13px] hover:text-black bg-transparent border-none cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/terms')}
                    className="text-[#6B7280] text-[12px] sm:text-[13px] hover:text-black bg-transparent border-none cursor-pointer"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#9CA3AF] text-[11px] sm:text-[12px] text-center sm:text-left">
              © 2026 SEO Neuralyze. All rights reserved.
            </p>
            <p className="text-[#9CA3AF] text-[10px] sm:text-[12px] font-mono text-center sm:text-right">
              Powered by SBERT + Neural Vector Space Mapping
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
