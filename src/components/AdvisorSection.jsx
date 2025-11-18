import React from "react";

export default function AdvisorSection() {
  const advisors = [
    { name: "Bryson Tiller", role: "BUSINESS MANAGER", image: "https://file.aiquickdraw.com/imgcompressed/img/compressed_fd8b6d7fd0133b0c0cabc5d968541a9a.webp" },
    { name: "Walker Scobell", role: "LEGAL OFFICER", image: "https://img.freepik.com/premium-photo/businessman-with-laptop-isolated-transparent-background-png-file-cut-out_1194342-10940.jpg" },
    { name: "Jacob Elordi", role: "FINANCE ADVISOR", image: "https://png.pngtree.com/png-vector/20250112/ourmid/pngtree-a-black-business-man-smilling-for-success-office-in-suit-smiling-png-image_15162079.png" },
    { name: "Justin Novak", role: "TAX EXAMINER", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyevAr-cKO0eqNMSnVFJvZuQjBtDEZJ0RgdA&s" },
    { name: "Myles Evander", role: "GENERAL MANAGER", image: "https://file.aiquickdraw.com/imgcompressed/img/compressed_fd8b6d7fd0133b0c0cabc5d968541a9a.webp" },
    { name: "Alex Evander", role: "GENERAL MANAGER", image: "https://img.freepik.com/premium-photo/businessman-with-laptop-isolated-transparent-background-png-file-cut-out_1194342-10940.jpg" },
  ];

  return (
    <section className="w-full bg-white text-black py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs tracking-widest bg-gray-200 text-black px-4 py-1 rounded-md font-semibold">
              OUR EXPERT
            </span>
            <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">
              Trusted guidance for <br /> lasting financial growth.
            </h2>
          </div>

          <p className="text-gray-600 text-lg max-w-md">
            Stay organized and focused on growth while we handle your day financial record.
            Gravida urna vehicula volutpat velit sed imperdiet.
          </p>
        </div>

        {/* Advisors Grid - staggered layout */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {advisors.map((adv, index) => (
            <div
              key={index}
              className={`group cursor-pointer flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 ${
                index % 2 === 1 ? "lg:mt-12" : ""
              }`}
            >
              <div className="overflow-hidden rounded-xl shadow-xl w-64 h-72 transform transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                <img
                  src={adv.image}
                  alt={adv.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold transition-colors duration-300 group-hover:text-blue-600">
                {adv.name}
              </h3>
              <p className="text-gray-500 text-sm tracking-wide">{adv.role}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center lg:justify-end mt-14">
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 transition-all">
            See All Advisor
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}