import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/ikuk-sample-close-up.jpg";
import groom from "~/images/fauzi-img.jpg";

const BrideAndGroom = () => {
  return (
    <div className="pt-20 pb-4 bg-[#fff] rounded-xl">
      <h3 className="text-3xl text-center font-sans font-bold text-gray-700 mb-6">
        Kami yang Berbahagia
      </h3>
      <div className="w-full flex flex-wrap pb-20">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={bride}
              alt="pengantin perempuan"
              className="w-48 h-48 rounded-full mb-8"
            />
            <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Freshka Julie Hardi
            </h3>
            <div className="mb-4">
              <TextWithLine>Pengantin Perempuan</TextWithLine>
            </div>
            <p className="font-sans text-black-500 leading-6">
              Lahir pada 28 Juli 1993 di Batusangkar, Sumatera Barat. Putri Sulung dari{" "}
              <strong>Bapak Jon Hardi</strong> dan{" "}
              <strong>Ibu Yunardah</strong>.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={groom}
                alt="pengantin laki-laki"
                className="w-48 h-48 rounded-full mb-8"
              />
              <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
                Kurniawan Aji Muhammad
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Pengantin Laki-laki</TextWithLine>
              </div>
              <p className="font-sans text-gray-500 leading-6">
                Lahir pada 90 Desember 2145 di Ciamis, Jawa Barat. Putra Sulung
                dari <strong>Bapak Gol D. Roger</strong> dan{" "}
                <strong>Ibu Portgas D. Rouge</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
