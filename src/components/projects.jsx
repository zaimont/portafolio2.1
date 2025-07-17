import React from "react";



function Projects(){
    return(
      <div id="work" className="justify-center items-center flex-wrap py-12 px-6">
      <h2 className="text-[#6E4E4D] text-[30px] text-center sm:text-[45px] font-normal" style={{
          textShadow: "0px 4px 4px #BE9798",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#F5F5F5",
          fontFamily: "'Chewy', sans-serif"
        }}> Work </h2>
    
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Proyecto 1 */}
        <div className=" relative group bg-white rounded-lg p-4  overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }}>
          <img className="w-[200px] h-[200px] rounded-lg mx-auto" src="/portafolio2.1/img/innovabank.png" alt="InnovaBank" />
            <h3 className="text-center py-4 text-xl font-semibold">InnovaBank</h3>
          <div className="absolute inset-0 bg-white p-4 rounded-lg  text-center opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-300 text-[#111]">
            <h3 className="text-xl font-semibold">InnovaBank</h3>
            <p className="md:p-4 sm:px-10 mt-2 text-sm">
              Banca digital que por medio de inteligencia artificial te dice si eres solvente o no. Si eres
              solvente, te muestra opciones de crédito e inversiones que se ajustan a tu nivel de solvencia.
            </p>
          </div>
        </div>
    
        {/* Proyecto 2 */}
        <div className="relative group bg-white rounded-lg p-4 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }}>
          <img className="w-[200px] h-[200px] rounded-lg mx-auto" src="/portafolio2.1/img/innovabank.png" alt="InnovaBank" />
            <h3 className="text-center py-4 text-xl font-semibold">InnovaBank</h3>
          <div className="absolute inset-0 bg-white p-4 rounded-lg text-center opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-300 text-[#111]">
            <h3 className="text-xl font-semibold">InnovaBank</h3>
            <p className="mt-2 text-sm">
              Banca digital que por medio de inteligencia artificial te dice si eres solvente o no. Si eres
              solvente, te muestra opciones de crédito e inversiones que se ajustan a tu nivel de solvencia.
            </p>
          </div>
        </div>
    
        {/* Proyecto 3 */}
        <div className="relative group bg-white rounded-lg p-4 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }}>
          <img className="w-[200px] h-[200px] rounded-lg mx-auto" src="/portafolio2.1/img/innovabank.png" alt="InnovaBank" />
            <h3 className="text-center py-4 text-xl font-semibold">InnovaBank</h3>
          <div className="absolute inset-0 bg-white p-4 rounded-lg text-center opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-300 text-[#111]">
            <h3 className="text-xl font-semibold">InnovaBank</h3>
            <p className="mt-2 text-sm">
              Banca digital que por medio de inteligencia artificial te dice si eres solvente o no. Si eres
              solvente, te muestra opciones de crédito e inversiones que se ajustan a tu nivel de solvencia.
            </p>
          </div>
        </div>

        <div className="relative group bg-white rounded-lg p-4 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }}>
          <img className="w-[200px] h-[200px] rounded-lg mx-auto" src="/portafolio2.1/img/innovabank.png" alt="InnovaBank" />
            <h3 className="text-center py-4 text-xl font-semibold">InnovaBank</h3>
          <div className="absolute inset-0 bg-white p-4 rounded-lg text-center opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-300 text-[#111]">
            <h3 className="text-xl font-semibold">InnovaBank</h3>
            <p className="mt-2 text-sm">
              Banca digital que por medio de inteligencia artificial te dice si eres solvente o no. Si eres
              solvente, te muestra opciones de crédito e inversiones que se ajustan a tu nivel de solvencia.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    )
}

export default Projects;