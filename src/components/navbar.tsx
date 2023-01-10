export function Navbar() {
  return (
    <div className="py-3 fixed top-0 left-0 w-full bg-white">
      <div className="container mx-auto px-5">
        <nav className="flex justify-between items-center">
          <div className="border-l-4 border-[#203271]">
            <a className="font-semibold ml-2 text-2xl text-[#101C45]" href="/">
              PRIMATEKNIK
            </a>
          </div>
          <div className="text-[#101C45] opacity-80">
            <a
              className="mx-3 hover:border-b-2 hover:border-[#101C45]"
              href="/"
            >
              Home
            </a>
            <a
              className="mx-3 hover:border-b-2 hover:border-[#101C45]"
              href="#about"
            >
              About
            </a>
            <a
              className="mx-3 hover:border-b-2 hover:border-[#101C45]"
              href="#services"
            >
              Services
            </a>
            <a
              className="mx-3 hover:border-b-2 hover:border-[#101C45]"
              href="#gallery"
            >
              Gallery
            </a>
          </div>
          <div className="bg-[#203271] px-3 py-2 rounded-md">
            <a className="text-white" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
