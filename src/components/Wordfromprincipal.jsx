import Image from "next/image";

export default function Wordfromprincipal({principal}){
    return(
        <div className="relative bg-white w-full h-auto flex flex-col items-center justify-center py-32">
        <div className="text-center max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Word from Principal
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Welcome to Shree Pashupati Viddhya Asharam. Our goal is to foster a
            nurturing environment that promotes academic excellence and
            character development. We are committed to providing a comprehensive
            education that prepares our students for future success.
          </p>
          <Image
            src={principal}
            alt="Principal Image"
            className="transition ease-in-out duration-500 rounded-full mx-auto mb-4 hover:scale-105 shadow-2xl"
            width={150}
            height={150}
          />
          <p className="text-gray-700 italic">- Keshav Thapa</p>
        </div>
      </div>
    )
}