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
            Soy recién egresada de la carrera de Ingeniería en Tecnologías de la Información e Innovación Digital, con formación en desarrollo de software multiplataforma.
            <br></br>
            Me apasiona la tecnología y el aprendizaje continuo. Actualmente busco desarrollar experiencia profesional en áreas como desarrollo web, desarrollo backend, bases de datos e inteligencia artificial aplicada.
            <br></br>
            Durante mi formación participé en proyectos académicos, hackatones y estadías profesionales que me permitieron fortalecer mis habilidades técnicas y de trabajo en equipo.
          </p>
        </div>
      </div>



    </div>
  )
}

export default AboutMe;