export default function Aboutlist({ title, desc, list }) {
  return (
    <div className="">
      <p className="text-2xl mt-5 mb-10 text-gray-950 horizontal-line relative">
        {title}
      </p>
      <p className="text-lg">{desc}</p>
      {list && (
        <div className=" mt-5">
          {list.map((item, index) => (
            <>
              <span className="font-bold">{item.title} </span>
              <span className="">{item.desc}</span>
              <br />
              <br />
            </>
          ))}
        </div>
      )}
    </div>
  );
}
