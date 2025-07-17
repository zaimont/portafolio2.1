import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Jose de Jesus Cabrera Castro",
    img: "/portafolio2.1/img/cabrera.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lacus nec elit dictum interdum. Suspendisse potenti.",
  },
  {
    name: "Juventino Saucedo",
    img: "/portafolio2.1/img/juventino.png",
    text: "Mauris in nulla eget erat tincidunt fermentum. Donec vel sapien vel nulla sodales tincidunt non ac mauris.",
  },
  {
    name: "Isabel Sanchez Gaona",
    img: "/portafolio2.1/img/isa.png",
    text: "Cras in orci convallis, feugiat arcu vitae, bibendum arcu. Integer pretium, orci nec gravida luctus, nisl erat sagittis leo.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  // Autoavanza cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (

    <div className="w-full max-w-2xl mx-auto p-4 relative overflow-hidden m-20">
      <h2 className="text-[#6E4E4D] text-[30px] text-center  sm:text-[45px] font-normal" style={{
          textShadow: "0px 4px 4px #BE9798",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#F5F5F5",
          fontFamily: "'Chewy', sans-serif"
        }}> Testimonials </h2>
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {testimonials.map((t, i) => (
          <div key={i} className="w-full flex-shrink-0 px-6">
            <div className="bg-[#F0ECED]  rounded-lg shadow-[#6E4E4D] shadow-xl  p-6 text-center" style={{
    boxShadow: "0px 8px 8px #6E4E4D",
  }}>
              <img className="w-50 h-50 mx-auto rounded-full mb-4 object-cover" src={t.img} alt={t.name} />
              <p className=" font-serif text-sm mb-4">{t.text}</p>
              <h2 className=" font-serif font-bold">{`- ${t.name}`}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button onClick={prev} className="absolute top-1/2 left-4 -translate-y-1/2 text-2xl text-[#6E4E4D] hover:scale-125 transition">&#8592;</button>
      <button onClick={next} className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl text-[#6E4E4D] hover:scale-125 transition">&#8594;</button>
    </div>
  );
}

export default Testimonials;
