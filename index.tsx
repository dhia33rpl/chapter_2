import Image from "next/image";

interface CardProps {
  imageSource: string;
  name: string;
  children: React.ReactNode;
}

export default function Card({ imageSource, name, children }: CardProps) {
  return (
    <div className="bg-white w-[180px] md:w-[200px] rounded-2xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition duration-300">
      {/* Gambar */}
      <div className="w-full md:w-60 p-5 rounded-sm flex flex-col items-center">
        <Image
          src={imageSource}
          alt={name}
          width={200}
          height={160}
        />
      </div>

      {/* Nama */}
      <h3 className="font-extrabold text-base text-gray-900 mt-3">{name}</h3>

      {/* Deskripsi */}
      <p className="text-xs text-gray-600 mt-1 px-3 mb-4 leading-snug">
        {children}
      </p>

      {/* Tombol */}
      <button className="bg-[#2D336B] text-white text-sm px-6 py-2 mb-4 rounded-md hover:bg-[#3C4785] transition font-semibold">
        Pilih
      </button>
    </div>
  );
}
