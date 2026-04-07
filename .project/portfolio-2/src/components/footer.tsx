'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link href="/experience" className="hover:text-blue-600 transition-colors">Experience</Link></li>
              <li><Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link></li>
              <li><Link href="/notTech" className="hover:text-blue-600 transition-colors pointer-events-none opacity-50">Not so Tech</Link></li>
              <li><Link href="#blog" className="hover:text-blue-600 transition-colors pointer-events-none opacity-50">Blog</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/adarshrazor" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/adarsh007/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://adarshrazor.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Old Website</a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <FaTwitter size={24} />
              </a> */}
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p>Feel free to reach out!</p>
            <a href="mailto:adarshanshu7@gmail.com" className="hover:text-blue-600 transition-colors">contact@here.com</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Adarsh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;