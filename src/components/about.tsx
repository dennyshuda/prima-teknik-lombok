import like from "../assets/icons/like.svg";
import customer from "../assets/icons/customer.svg";
import guarantee from "../assets/icons/guarantee.svg";

export function About() {
  return (
    <div className="mt-20">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl mb-5">PRIMA TEKNIK LOMBOK</h1>
          <p className="xl:w-2/3 mx-auto opacity-80 text-xl text-center">
            Merupakan sebuah perusahaan yang bergerak sebagai penyedia jasa
            perbaikan, rental, jual beli, perawatan & instalasi genset untuk
            wilayah Lombok, Sumbawa, dan Bima yang berkualitas dan telah
            terpercaya. Kami memiliki Mekanik yang sangat berpengalaman dan
            telah menangani ratusan unit Genset dari berbagai troubleshoot
            genset yang pernah di selesaikan oleh mekanik kami.
          </p>
        </div>
        <div className="mt-10 flex gap-5 justify-evenly items-center">
          <div className="max-w-[15rem] text-center py-10">
            <img className="inline-block w-20" src={like} alt="" />
            <h1 className="text-xl font-semibold my-5">Jaminan Terbaik</h1>
            <p>
              Dikerjakan oleh mekanik terbaik berpengalaman dan profesional.
            </p>
          </div>
          <div className="max-w-[15rem] text-center py-10">
            <img className="inline-block w-20" src={customer} alt="" />
            <h1 className="text-xl font-semibold my-5">Pelayanan Terbaik</h1>
            <p>
              Kami selalu berusaha memberikan pelayanan terbaik kepada
              pelanggan.
            </p>
          </div>
          <div className="max-w-[15rem] text-center py-10">
            <img className="inline-block w-20" src={guarantee} alt="" />
            <h1 className="text-xl font-semibold my-5">Bergaransi</h1>
            <p>Kami memberikan garansi terbaik untuk setiap produk kami.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
