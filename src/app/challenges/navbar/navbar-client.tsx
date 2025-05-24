"use client";

import { ChallengeSection } from "@/components/challenge-container";
import DesktopNavbar from "@/components/navbar/desktop-navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import { navbarStyles } from "@/config/navbar-config";

export default function NavbarClient() {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center mt-6">Navbar Challenge</h1>
        
        {/* Demo Navbar Container */}
        <div className="border border-gray-300 rounded-lg mb-8 overflow-hidden">
          {/* Desktop navbar (hidden on screens < 1024px) */}
          <div className="hidden lg:block">
            <DesktopNavbar />
          </div>
          
          {/* Tablet navbar (hidden on screens < 768px and >= 1024px) */}
          <div className="hidden md:block lg:hidden">
            <MobileNavbar />
          </div>
          
          {/* Mobile navbar (hidden on screens >= 768px) */}
          <div className="md:hidden">
            <MobileNavbar />
          </div>
        </div>
        
        {/* Responsive Indicator */}
        <div className="text-center mb-4">
          <span className="md:hidden px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Mobile View (&lt; 768px)</span>
          <span className="hidden md:inline-block lg:hidden px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">Tablet View (768px - 1023px)</span>
          <span className="hidden lg:inline-block px-3 py-1 bg-green-500 text-white rounded-full text-sm">Desktop View (≥ 1024px)</span>
        </div>
        
        {/* Page Content */}
        <div className={navbarStyles.content}>
          <div className="max-w-[600px] mx-auto">
            <ChallengeSection title="Description" className="md:mx-6 mx-10">
              <p className="mb-4">
                This page demonstrates a responsive navbar with desktop and mobile views.
                Try resizing your browser window to see the different layouts.
              </p>
              <p className="mb-4">
                The navbar includes both desktop and mobile versions with a hamburger menu
                that toggles the mobile navigation.
              </p>
              <p>
                <strong>Note:</strong> Screens smaller than 768px are considered mobile, 
                screens between 768px and 1023px are considered tablet (with mobile-like layout),
                and screens 1024px and larger are considered desktop.
              </p>
            </ChallengeSection>
          </div>
        </div>
      </div>
    </div>
  );
}
