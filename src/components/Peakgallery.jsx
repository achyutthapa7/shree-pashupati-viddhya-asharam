import Image from "next/image";

export default function Peakgallery({ img }) {
  return (
    <div className="transition w-1/4 cursor-pointer hover:w-full rounded-lg hover:rounded-none overflow-hidden">
      <Image
        src={img}
        alt="image"
        className=" transition h-full w-full object-cover rounded-lg hover:rounded-none hover:scale-125 hover:rotate-3"
      />
    </div>
  );
}
