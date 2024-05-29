import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ title, desc, icon }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md overflow-hidden transform transition duration-500 hover:scale-105 mb-8 rounded-lg">
      <div className="p-6 flex items-center">
        <FontAwesomeIcon icon={icon} className="text-blue-500 text-3xl mr-4" />
        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-700">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
