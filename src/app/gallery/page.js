// import Gallery from "@/components/Gallery";
import dynamic from "next/dynamic";
const Gallery = dynamic(() => import("@/components/Gallery"));
const gallery = () => {
  return (
    <>
      <Gallery />
    </>
  );
};
export default gallery;
