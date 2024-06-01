import Card from "./Card";

export default function Offerings({ offers }) {
  return (
    <div className="relative py-16 bg-gray-100 h-auto 2xl:h-screen xl:h-screen px-10">
      <p className="text-3xl font-bold text-center text-gray-800 mb-10">
        What We Offer?
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {offers.map((offer, i) => (
          <Card
            key={i}
            title={offer.title}
            desc={offer.desc}
            icon={offer.icon}
          />
        ))}
      </div>
    </div>
  );
}
