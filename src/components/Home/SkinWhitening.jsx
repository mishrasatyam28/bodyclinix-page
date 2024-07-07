import React from "react";
import { PhoneCall } from "lucide-react";
export default function SkinWhitening() {
  const items = [
    {
      id: 1,
      text: "Skin Brightening",
      src: "https://cdn-jmgpf.nitrocdn.com/aYHRDvZDkGpEIPBdKlpvliclYbLLHPHi/assets/images/optimized/rev-d05c79b/bodyclinix.in/wp-content/webp-express/webp-images/uploads/2024/03/skin.jpg.webp",
    },
    {
      id: 2,
      src: "https://cdn-jmgpf.nitrocdn.com/aYHRDvZDkGpEIPBdKlpvliclYbLLHPHi/assets/images/optimized/rev-d05c79b/bodyclinix.in/wp-content/webp-express/webp-images/uploads/2024/03/glu.jpg.webp",
      text: "Advanced Glutathione ",
    },
    {
      id: 3,
      src: "https://cdn-jmgpf.nitrocdn.com/aYHRDvZDkGpEIPBdKlpvliclYbLLHPHi/assets/images/optimized/rev-d05c79b/bodyclinix.in/wp-content/uploads/2024/03/dull.jpg",
      text: "Dull Skin",
    },
    {
      id: 4,
      src: "https://cdn-jmgpf.nitrocdn.com/aYHRDvZDkGpEIPBdKlpvliclYbLLHPHi/assets/images/optimized/rev-d05c79b/bodyclinix.in/wp-content/uploads/2024/03/dark.jpg",
      text: "Under Eye Dark Circles",
    },
  ];
  return (
    <>
      <div
        name=""
        className="bg-gradient-to-b from-white to-gray-200 w-full text-white md:h-full text-center md:text-left p-4"
      >
        <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-black text-4xl font-bold  flex items-center justify-center pb-4">
              Skin Whitening
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-5 py-2">
            {items.map(({ id, src, text }) => (
              <div
                key={id}
                className="shadow-md shadow-slate-700 rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <h1 className="text-black text-center font-bold p-3 text-xl">
                  {text}
                </h1>
              </div>
            ))}
          </div>

          <div className="text-black flex flex-col items-center justify-center gap-4 mb-4 pt-8">
            <a
              href="tel:+917303335036"
              className="py-3 text-xl text-center font-semibold bg-green-600 text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90 flex"
            >
              <span>
                <PhoneCall className="pt-1" size={30} />
              </span>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
