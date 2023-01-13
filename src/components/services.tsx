import service from "../assets/service.svg";
import check from "../assets/icons/check.svg";

export function Services() {
  const lists: string[] = [
    "Jual Beli Dan Sewa Unit Genset",
    "Menyewakan Alat Berat",
    "Jasa Service Mesin",
    "Menjual Spare Part",
    "Tes Nozzle",
    "Jasa Tes Bosch Pump",
    "Mobil Crane",
    "Dan Lain-Lain",
  ];

  return (
    <div className="container mx-auto px-5 mt-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Services</h1>
        <p>
          Kami menyediakan berbagai jenis unit mekanikal untuk beragam kebutuhan
        </p>
      </div>
      <div className="flex items-center mt-5 gap-5">
        <div className="w-1/2">
          <img className="w-full" src={service} alt="service picture" />
        </div>
        <div>
          <ul>
            {lists.map((item, index) => {
              return (
                <>
                  <li className="flex items-center my-3" key={index}>
                    <img className="inline-block mr-3 w-8" src={check} alt="" />
                    <p className="inline-block text-3xl">{item}</p>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
