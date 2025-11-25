import React, { useState } from "react";
import MyContainer from "../../components/MyContainer";
import Hamburger from "hamburger-react";
import Logo from "../../components/Logo";
import MyLinks from "../../components/MyLinks";
import { Link } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
      { label: "Services", path: "/services" },
      { label: "Coverage", path: "/coverage" },
      { label: "About Us", path: "/about-us" },
      { label: "Pricing", path: "/pricing" },
      { label: "Blog", path: "/blog" },
      { label: "Contact", path: "/contact" },
    ];

  return (
    <div className="bg-white shadow-lg ">
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

          <div className="text-xl">
            <Logo />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <MyLinks to={item.path}>{item.label}</MyLinks>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-2">
          <button className="btn btn-ghost">Sign In</button>
          <button className="btn bg-primary">Sign Up</button>
        </div>
      </MyContainer>

      {isOpen && (
        <div className="bg-white border-t border-gray-200 lg:hidden">
          <ul className="menu menu-vertical p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <MyLinks to={item.path} onClick={() => setIsOpen(false)}>
                  {item.label}
                </MyLinks>
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
