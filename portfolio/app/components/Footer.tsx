export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col md:flex-row justify-around items-center p-8 mt-auto bg-[#8e6d74] text-[#f5f5f5]">
      {/* Quick Links */}
      <div className="mb-6 md:mb-0">
        <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="/" className="hover:text-[#51e2f5] transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/work" className="hover:text-[#51e2f5] transition-colors">
              Work
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-[#51e2f5] transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="text-center mb-6 md:mb-0">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">
            © {currentYear} Israel Dail. All rights reserved.
          </p>
          <p className="text-sm">
            Made with ❤️ in Miami, FL
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex flex-col items-center">
        <h3 className="font-semibold text-lg mb-3">Connect</h3>
        <div className="flex gap-4">
          <a 
            href="https://github.com/israeldail" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#51e2f5] transition-colors"
          >
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a 
            href="https://linkedin.com/in/israeldail" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#51e2f5] transition-colors"
          >
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
          <a 
            href="mailto:israeldail2@gmail.com"
            className="hover:text-[#51e2f5] transition-colors"
          >
            <i className="fa-solid fa-envelope fa-xl"></i>
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
}
