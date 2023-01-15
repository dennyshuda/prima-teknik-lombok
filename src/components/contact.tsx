import whatsapp from "../assets/icons/whatsapp.svg";
import telephone from "../assets/icons/telephone.svg";

export function Contact() {
  return (
    <div className="container mx-auto px-5 mt-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p>
          Jika Anda mencari bantuan lebih lanjut, silahkan hubungi kami melalui
        </p>
      </div>
      <div className="flex justify-center gap-5 my-5">
        <a
          className="flex gap-4 justify-center py-3 px-10 rounded-full max-w-[15rem] border-2 drop-shadow-xl border-green-500"
          href="https://api.whatsapp.com/send?phone=628175727799&text=Halo%20pak%20samsul%20saya%20berminat"
          target={"_blank"}
        >
          <img src={whatsapp} alt="Whastapp Icon" />
          <p className="text-green-500">Whatsapp</p>
        </a>
        <a
          className="flex gap-4 justify-center py-3 px-10 rounded-full max-w-[15rem] border-2 drop-shadow-xl border-[#203271] bg-[#203271] text-white"
          href="https://api.whatsapp.com/send?phone=628175727799&text=Halo%20pak%20samsul%20saya%20berminat"
          target={"_blank"}
        >
          <img src={telephone} alt="Telephone Icon" />
          <p>Telephone</p>
        </a>
      </div>
    </div>
  );
}
