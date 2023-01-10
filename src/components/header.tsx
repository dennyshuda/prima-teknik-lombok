import picture from "../assets/header.png";
import cummins from "../assets/brands/cummins.svg";
import perkins from "../assets/brands/perkins.svg";
import caterpillar from "../assets/brands/caterpillar.svg";
import stampford from "../assets/brands/stampford.svg";

export function Header() {
  return (
    <div className="container mx-auto px-5">
      <div className="h-[70vh] flex items-end justify-between">
        <div className="w-1/2">
          <h1 className="text-7xl font-bold w-[40rem] ">
            Prima Teknik Lombok Siap Membantu Anda
          </h1>
          <p className="w-[30rem] my-7 text-2xl">
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
        <div>
          <img className="w-[35rem]" src={picture} alt="header picture" />
        </div>
      </div>
      <div className="h-[30vh] flex justify-between items-center">
        <div>
          <img className="h-[10rem]" src={cummins} alt="Cummins Logo" />
        </div>
        <div>
          <img className="h-[10rem]" src={perkins} alt="Cummins Logo" />
        </div>
        <div>
          <img className="h-[10rem]" src={stampford} alt="Cummins Logo" />
        </div>
        <div>
          <img className="h-[5rem]" src={caterpillar} alt="Cummins Logo" />
        </div>
      </div>
    </div>
  );
}
