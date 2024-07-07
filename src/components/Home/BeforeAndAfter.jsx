import React from "react";
import { PhoneCall } from "lucide-react";
export default function BeforeAndAfter() {
  const items = [
    {
      id: 1,
      src: "https://i.redd.it/ve8y8jlsx8t41.jpg",
    },
    {
      id: 2,
      src: "https://canyonlaserskincare.com/wp-content/uploads/2023/05/forma-Facial-1024x1024.jpg",
    },
    {
      id: 3,
      src: "https://i0.wp.com/romyraves.com/wp-content/uploads/2021/05/Romy-Potenza-Before-After-Front-May-2021.jpg?resize=1024%2C1024&ssl=1",
    },
    {
      id: 4,
      src: "https://i0.wp.com/romyraves.com/wp-content/uploads/2021/05/Romy-Potenza-Before-After-Side-May-2021.jpg?resize=1024%2C1024&ssl=1",
    },
    {
      id: 5,
      src: "https://beautyboostmedspa.com/storage/2022/12/masseters-Before-and-After-two.jpg",
    },
    {
      id: 6,
      src: "https://skinnovationlaser.com.au/wp-content/uploads/2022/07/c3-1024x1024.jpg",
    },
    {
      id: 7,
      src: "https://beautyboostmedspa.com/storage/2022/12/zo-prp-prf-before-after-nine-1024x1024.jpg",
    },
    {
      id: 8,
      src: "https://beautyboostmedspa.com/storage/2022/12/zo-prp-prf-before-after-eight-1024x1024.jpg",
    },
  ];
  return (
    <>
      <div
        name=""
        className="bg-gradient-to-b from-black to-gray-700 w-full text-white md:h-full text-center md:text-left p-4"
      >
        <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-white text-4xl font-bold  flex items-center justify-center pb-4">
              OUR WORK RESULTS - BEFORE AND AFTER
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-5 py-2">
            {items.map(({ id, src }) => (
              <div
                key={id}
                className="shadow-md shadow-slate-700 rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
