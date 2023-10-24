import React from "react";
import Form from "./Form";
import Cards from "./Cards";
import DetailsSec from "./DetailsSec";

const MainSection = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('./static/banner1.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-4">
          <div className="col-span-6 mt-40 ml-16 text-white">
            <h3 className="text-[30px] font-bold">WELCOME TO</h3>
            <h3 className="uppercase text-[30px] font-bold">
              Environmental Pledge Wall
            </h3>
            <p className="mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button
              type="submit"
              className="bg-[#162055] mt-10 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>

          <div className="col-span-6">
            <Form />
          </div>
        </div>
      </div>
      <div>
        <DetailsSec />
      </div>
      <div className="m-5">
        <Cards />
      </div>
    </>
  );
};

export default MainSection;
