import React from "react";

import { useState } from "react";

export default function FinancialControlProcess() {
  const steps = [
    { id: "01", title: "Basic Research", desc: "In ligula libero neque neque nulla neque rutrum. Iaculis quam.", image: "https://www.marketing91.com/wp-content/uploads/2020/05/Basic-Research.jpg" },
    { id: "02", title: "Discovery", desc: "In ligula libero neque neque nulla neque rutrum. Iaculis quam.", image: "https://gudfin-demo.pbminfotech.com/html-demo/images/demo-1/static-box/processbox-img-02.png" },
    { id: "03", title: "Build Plan", desc: "In ligula libero neque neque nulla neque rutrum. Iaculis quam.", image: "https://gudfin-demo.pbminfotech.com/html-demo/images/demo-1/static-box/processbox-img-03.png" },
    { id: "04", title: "Execute", desc: "In ligula libero neque neque nulla neque rutrum. Iaculis quam.", image: "https://gudfin-demo.pbminfotech.com/html-demo/images/demo-1/static-box/processbox-img-04.png" },
  ];

  const [activeImage, setActiveImage] = useState(steps[0].image);

  return (
    <section className="w-full bg-[#0f1a24] text-white py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div>
          <span className="text-xs tracking-widest bg-yellow-600 text-black px-4 py-1 rounded-md font-semibold">
            OUR BUSINESS IMPACT
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">
            Successful Financial <br /> Control Process
          </h2>

          <p className="mt-6 text-gray-300 max-w-lg">
            Stay organized and focused on growth while we handle your daily financial
            record. Gravida urna vehicula volutpat velit sed imperdiet.
          </p>

          <div className="mt-10 space-y-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6 cursor-pointer group transition-all duration-300 hover:translate-x-2"
                onMouseEnter={() => setActiveImage(step.image)}
              >
                <span className="text-xl font-bold text-yellow-500 group-hover:scale-110 transition-transform duration-300">{step.id}</span>
                <div>
                  <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-yellow-400">{step.title}</h3>
                  <p className="text-gray-400 text-sm max-w-md mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section Image */}
        <div className="flex justify-center">
          <img
            src={activeImage}
            alt="Financial Step"
            className="rounded-lg shadow-lg w-full max-w-md transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}