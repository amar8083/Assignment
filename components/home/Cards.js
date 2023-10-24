import React from "react";

const Card = () => {
  const data = [
    {
      image: "./static/eng.jpg",
      name: "Energy Conservation",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: "./static/water.jpg",
      name: "Waste Reduction",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: "./static/trans.jpg",
      name: "Sustainable Transportation",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: "./static/watercon.jpg",
      name: "Water Conservation",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className="grid lg:grid-cols-12 grid-cols-1">
      {data.map((item, index) => (
        <div className="lg:col-span-3 sm:col-span-12">
          <div className="flex flex-wrap justify-center">
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-[16px] mb-2">{item.name}</div>
                <p className="text-gray-700 text-[14px]">{item.title}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #Tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #Tag2
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #Tag3
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
