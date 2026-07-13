import React from "react";


function AboutMe() {
  return (
    <div id="aboutMe" className=" sm:w-auto md:w-auto my-20 grid grid-cols-1 lg:m-4  ">

      <div className="flex p-2 m-6 sm:flex-col">

        <h2 className="text-[#6E4E4D] text-[30px] text-center sm:text-[45px] font-normal" style={{
          textShadow: "0px 4px 4px #BE9798",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#F5F5F5",
          fontFamily: "'Chewy', sans-serif"
        }}>About Me</h2>
      </div>

      <div className=" p-4 border-4 rounded-2xl m-5  border-[#B7959B]">
        <div className="py-10 border-2 border-pink-200 rounded-lg    px-2 bg-[#F0ECED] text-center text-black">
          <p className="text-lg mt-4 p-4">
            Soy Ingeniera en Tecnologías de la Información e Innovación Digital, especializada en desarrollo de software multiplataforma. Cuento con experiencia práctica en el desarrollo de aplicaciones web y móviles, trabajando con tecnologías como React, React Native, Node.js, SQL Server y APIs REST.
            <br></br>
            <br></br>
            Me apasiona la tecnología, el aprendizaje continuo y la creación de soluciones digitales que aporten valor. Durante mi formación y experiencia profesional he participado en proyectos de desarrollo de software, hackathones y estadías profesionales, fortaleciendo mis habilidades técnicas, de resolución de problemas y trabajo colaborativo.<br></br>
           <br></br>
           Actualmente continúo ampliando mis conocimientos en desarrollo backend, bases de datos, inteligencia artificial aplicada y nuevas tecnologías, con el objetivo de seguir creciendo como ingeniera de software.
          </p>
        </div>
      </div>



    </div>
  )
}

export default AboutMe;