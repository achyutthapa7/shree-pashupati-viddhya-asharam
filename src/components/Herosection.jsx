import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Herosection({
  faVolumeMute,
  faVolumeUp,
  video,
  isMuted,
  toggleMute,
}) {
  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden">
      <video
        src={video}
        autoPlay
        loop
        muted={isMuted}
        className="absolute w-full h-full object-center object-cover -z-20"
      ></video>
      <button
        onClick={toggleMute}
        className="absolute md:bottom-10 md:right-10 bottom-2 right-2 bg-black bg-opacity-50 text-white md:p-3 2xl:p-5 p-2 rounded-full flex items-center justify-center z-30"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        <FontAwesomeIcon
          icon={isMuted ? faVolumeMute : faVolumeUp}
          className="lg:text-[25px] md:text-[20px] text-[17px] 2xl:text-[50px]"
        />
      </button>

      <div className="absolute top-[30%] left-[10%]">
        <p className="text-white 2xl:text-8xl xl:text-5xl lg:text-5xl text-4xl font-extrabold tracking-wide 2xl:leading-[100px] xl:leading-[60px] lg:leading-[60px] md:leading-[60px] leading-[50px]">
          ONE GOAL ONE <br />
          MISSION, OUR <br />
          CHILDREN OUR NATION.
        </p>
        <p className="text-white font-extralight tracking-wider 2xl:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> eius beatae illo sit delectus.
        </p>
        <button className="px-7 py-3 bg-orange-900 text-white font-thin rounded-md mt-3 tracking-widest uppercase 2xl:text-xl text-[17px] hover:bg-orange-700 active:bg-orange-600">
          <Link href={"/academic"}> Academics</Link>
        </button>
      </div>
    </div>
  );
}
