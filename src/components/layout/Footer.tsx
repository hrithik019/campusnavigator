
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-xl font-semibold flex items-center">
            <span className="text-blue-900">Campus</span>
            <span className="text-blue-600">Navigator</span>
          </Link>
          <p className="mt-4 text-gray-600 text-sm">
            Helping students find their perfect college match through personalized recommendations and aptitude testing.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">For Students</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/career-selection" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Find Colleges
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Aptitude Tests
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                College Comparisons
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Application Help
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
          <ul className="space-y-3">
            <li>
              <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Engineering Colleges
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Management Institutes
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Scholarship Information
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Study Abroad
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100">
        <p className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Campus Navigator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
