import React, { useState } from "react";
import MyContainer from "../../components/MyContainer";
import Hamburger from "hamburger-react";
import Logo from "../../components/Logo";
import MyLinks from "../../components/MyLinks";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
      { label: "Services", href: "#" },
      { label: "Coverage", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ];

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      <MyContainer className={"navbar"}>
        <div className="navbar-start">
          {/* Hamburger Menu - Mobile Only */}
          <div className="dropdown">
            <div className="lg:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                color="#1f2937"
                size={24}
                distance="sm"
                          />
            </div>
          </div>

          <a className="text-xl">
            <Logo />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <MyLinks href={item.href}>{item.label}</MyLinks>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-2">
          <button className="btn btn-ghost">Sign In</button>
          <button className="btn btn-success">Sign Up</button>
        </div>
      </MyContainer>

      {isOpen && (
        <div className="bg-white border-t border-gray-200 lg:hidden">
          <ul className="menu menu-vertical p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="border-t border-gray-200 pt-2 mt-2">
              <a className="text-center">Sign In</a>
            </li>
            <li>
              <a className="text-center bg-success text-white">Sign Up</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
