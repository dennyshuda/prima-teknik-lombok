import Hamburger from "hamburger-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  console.log(open);

  return (
    <div className="py-3 fixed top-0 left-0 w-full bg-white z-[999] md:hover:text-[#101C45]">
      <div className="container mx-auto px-5">
        <nav className="flex justify-between items-center">
          <div className="border-l-4 border-[#203271]">
            <a className="font-semibold ml-2 text-2xl text-[#101C45]" href="/">
              PRIMATEKNIK
            </a>
          </div>
          <div
            className={`text-[#101C45] md:opacity-80 md:block ${
              open ? "block" : "hidden"
            }`}
          >
            <div className="absolute top-[64px]  left-0 bg-white md:hover:text-[#101C45] w-full opacity-100 md:static">
              <a
                className="block hover:bg-[#203271] hover:text-white py-10 md:py-0 text-center md:mx-3 md:inline-block md:hover:border-b-2 md:hover:bg-white md:hover:text-[#101C45] md:hover:border-[#101C45]"
                href="/"
              >
                Home
              </a>
              <a
                className="block hover:bg-[#203271] hover:text-white py-10 md:py-0 text-center md:mx-3 md:inline-block md:hover:border-b-2 md:hover:bg-white md:hover:text-[#101C45] md:hover:border-[#101C45]"
                href="#about"
              >
                About
              </a>
              <a
                className="block hover:bg-[#203271] hover:text-white py-10 md:py-0 text-center md:mx-3 md:inline-block md:hover:border-b-2 md:hover:bg-white md:hover:text-[#101C45] md:hover:border-[#101C45]"
                href="#services"
              >
                Services
              </a>
              <a
                className="block hover:bg-[#203271] hover:text-white py-10 md:py-0 text-center md:mx-3 md:inline-block md:hover:border-b-2 md:hover:bg-white md:hover:text-[#101C45] md:hover:border-[#101C45]"
                href="#gallery"
              >
                Gallery
              </a>
            </div>
          </div>
          <div className="bg-[#203271] px-3 py-2 rounded-md hidden md:block">
            <a className="text-white" href="#contact">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <Hamburger
              color="#203271"
              toggled={open}
              toggle={setOpen}
              size={30}
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
