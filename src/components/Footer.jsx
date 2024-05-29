import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 ">
      <div className="mx-auto px-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +1 234 567 890
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> info@school.com
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 School St, City,
              Country
            </p>
          </div>
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p>
              We are dedicated to providing the best education and facilities
              for our students. Our mission is to foster growth, learning, and
              success in every student.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
