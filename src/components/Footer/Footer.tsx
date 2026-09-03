import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/razzakhadid-ba4147415";

  return (
    <footer className="bg-secondary border-t border-border py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-textMuted text-sm">
        
        <span>
          &copy; {new Date().getFullYear()} Mark_Q Infotech · Engineered for Security, Built for Scale
        </span>

        <div className="flex items-center space-x-4">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <FaTwitter className="w-5 h-5" />
          </a>

          <a
            href="mailto:markq7879@gmail.com"
            aria-label="Email"
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;