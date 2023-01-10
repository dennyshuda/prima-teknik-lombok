import picture from "../assets/header.png";
import cummins from "../assets/brands/cummins.svg";
import perkins from "../assets/brands/perkins.svg";
import caterpillar from "../assets/brands/caterpillar.svg";
import stampford from "../assets/brands/stampford.svg";

export function Header() {
  return (
    <div className="container mx-auto px-5">
      <div className="xl:h-[70vh] flex xl:items-end xl:justify-between flex-col xl:flex-row">
        <div className="xl:w-1/2 mt-[5rem] text-center xl:text-left order-2 xl:order-none">
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold xl:w-[40rem] ">
            Prima Teknik Lombok Siap Membantu Anda
          </h1>
          <p className="xl:w-[30rem] my-7 xl:text-2xl">
            Melayani service, jual beli, penyewaan, perawatan & instalasi genset
            di wilayah Lombok, Sumbawa, dan Bima.
          </p>
          <a
            href="#contact"
            className="inline-block text-white text-xl bg-[#203271] font-semibold rounded-lg px-10 py-5 mr-2 mb-2"
          >
            Hubungi Kami
          </a>
        </div>
        <div className="mt-[10rem] mx-auto">
          <img className="xl:w-[35rem]" src={picture} alt="header picture" />
        </div>
      </div>
      <div className="mt-[5rem] xl:mt-0 xl:h-[30vh] flex xl:justify-between xl:items-center justify-center flex-col xl:flex-row">
        <img
          className="h-[5rem] md:h-[10rem]"
          src={cummins}
          alt="Cummins Logo"
        />

        <img
          className="h-[5rem] md:h-[10rem]"
          src={perkins}
          alt="Cummins Logo"
        />

        <img
          className="h-[5rem] md:h-[10rem]"
          src={stampford}
          alt="Cummins Logo"
        />

        <img
          className="h-[2rem] md:h-[5rem]"
          src={caterpillar}
          alt="Cummins Logo"
        />
      </div>
    </div>
  );
}
