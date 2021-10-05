import ManVespro from "../../assets/manvespro.png";
const Services = () => {
  return (
    <>
      <div className="w-84  mx-12  mt-8 flex justify-center items-center">
        <div className="w-full p-8">
          <div className=" flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
            <div className="prod-title">
              <p className="text-md text-center  text-gray-900 font-bold">
                ¿Que esperas para usar tu Tarjeta Vespro?
              </p>

            </div>
            <div className="prod-img">
              <img src={ManVespro} className="w-full object-cover object-center" alt="Man"/>
            </div>
            <div className="prod-info grid gap-10">
              <div className="flex flex-col md:flex-row justify-between items-center text-black">
                <button className="px-4 py-1 transition ease-in duration-200  rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none">
                  Afiliarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
