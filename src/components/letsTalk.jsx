import React from "react";


function LetsTalk() {
  return (
    <div className="my-10 w-screen pt-2 flex justify-center items-center">
      <div
        id="contacts"
        className="font-serif grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 
             gap-x-30 bg-[#F0ECED] m-10 rounded-2xl px-10 py-10 
             border-[5px] shadow-2xl shadow-[#623635] border-[#623635] 
             items-start"
      >
        <h1 className="text-2xl text-center lg:text-left lg:px-30">¡Hablemos!</h1>

        <p className="text-center  ">
          Me encantaría seguir creciendo profesionalmente y aportar en nuevos proyectos.
          Si piensas que mi perfil puede sumar a tu equipo, estaré encantada de conversar.
        </p>

        <div className="flex justify-center lg:justify-end lg:px-30 px-2">
          
          <button
          onClick={() => window.location.href = "mailto:montserratlozano03@gmail.com?subject=Hola Montse&body=Quiero saber más sobre tu trabajo :)"}
          className="transform hover:scale-105 transition-transform duration-500 bg-[#C1ABAA] rounded-full border-2 p-3">
            <img className="w-6 h-6" src="/portafolio2.1/img/email.png" alt="email" />
          </button>

        </div>
      </div>
    </div>
  )
}

export default LetsTalk;