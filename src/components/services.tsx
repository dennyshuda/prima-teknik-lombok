import genset from "../data/index";

export function Services() {
  return (
    <div className="container mx-auto px-5 mt-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Services</h1>
        <p>
          Kami menyediakan berbagai jenis unit mekanikal untuk beragam kebutuhan
        </p>
      </div>
      <div className="flex justify-center gap-10 flex-wrap mt-10">
        {genset.map((item) => {
          return (
            <>
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img className="rounded-t-lg" src={item.imageUrl} alt="" />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {item.title}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    {item.description}
                  </p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=628175727799&text=${item.title}`}
                    className=" inline-block px-6 py-2.5 bg-[#203271] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#4056a4] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    target={"_blank"}
                  >
                    Informasi Harga
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <iv className="flex items-center mt-5 gap-5">
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
      </iv> */}
    </div>
  );
}
