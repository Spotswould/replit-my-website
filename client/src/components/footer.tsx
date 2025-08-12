import { Link } from "wouter";
import { Code, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pawsome-orange to-pawsome-yellow rounded-2xl flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold">Portfolio</span>
            </div>
            <p className="text-gray-400">
              28+ years of IT excellence, AWS expertise, and agile leadership.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/">
                <span className="block text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/apps">
                <span className="block text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                  Applications
                </span>
              </Link>
              <Link href="/contact">
                <span className="block text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                  Contact
                </span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-pawsome-orange transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-pawsome-orange transition-colors duration-200"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-pawsome-orange transition-colors duration-200"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Professional Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
