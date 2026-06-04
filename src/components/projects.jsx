import React from "react";



function Projects() {
  return (
    <div id="work" className="justify-center items-center flex-wrap py-12 px-6">
      <h2 className="text-[#6E4E4D] text-[30px] text-center sm:text-[45px] font-normal" style={{
        textShadow: "0px 4px 4px #BE9798",
        WebkitTextStrokeWidth: "1px",
        WebkitTextStrokeColor: "#F5F5F5",
        fontFamily: "'Chewy', sans-serif"
      }}> Projects </h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Proyecto 1 */}
        <div className="relative group bg-white rounded-lg p-4 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }}>

          <img
            className="w-[200px] h-[200px] rounded-lg mx-auto"
            src="/portafolio2.1/img/replay.png"
            alt="RePlay"
          />

          <h3 className="text-center py-4 text-xl font-semibold">RePlay</h3>

          <div className="
    absolute inset-0 bg-white p-4 rounded-lg text-center
    opacity-100 visible
    md:opacity-0 md:invisible
    md:group-hover:visible md:group-hover:opacity-100
    transition-all duration-300
    text-[#111] flex flex-col justify-center items-center
  ">

            <h3 className="text-xl font-semibold">RePlay</h3>

            <p className="mt-2 text-sm">
              Replay es un proyecto de predicción financiera para empresas que usa inteligencia artificial para anticipar inversiones y gastos. Ayuda a mejorar la planificación y optimizar recursos, facilitando decisiones financieras más acertadas y estratégicas.
            </p>


            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/zaimont/RePlay.git"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Código
              </a>

              <a
                href="https://drive.google.com/file/d/19QWwqbTrRZDxzTs3APzJ8b7favdwChO6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-[#B7959B] text-white rounded-lg hover:bg-[#6E4E4D] transition duration-300"
              >
                Ver Demo
              </a>
            </div>

          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="relative group bg-white rounded-lg p-4 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }}>

          <img
            className="w-[200px] h-[200px] rounded-lg mx-auto"
            src="/portafolio2.1/img/cooper.png"
            alt="cooper"
          />

          <h3 className="text-center py-4 text-xl font-semibold">Cooper</h3>

          <div className="absolute inset-0 bg-white p-4 rounded-lg text-center
    opacity-100 visible
    md:opacity-0 md:invisible
    md:group-hover:visible md:group-hover:opacity-100
    transition-all duration-300
    text-[#111] flex flex-col justify-center items-center">

            <h3 className="text-xl font-semibold">Cooper</h3>

            <p className="mt-2 text-sm">
              Cooper Mobile es una aplicación móvil desarrollada para facilitar la gestión de servicios
              de telefonía móvil desde una interfaz moderna e intuitiva. La plataforma permite a los usuarios
              realizar recargas, consultar su consumo de datos y saldo disponible, acceder a promociones,
              revisar el historial de movimientos y administrar la información de su cuenta de manera segura.
            </p>


            <div className="flex gap-3 mt-4">
              <a
                href="LINK_REPOSITORIO_GITHUB"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Código
              </a>

              <a
                href="https://drive.google.com/file/d/1QzXx3V4XWtBUB1qNAtnUI4p1sO22laew/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-[#B7959B] text-white rounded-lg hover:bg-[#6E4E4D] transition duration-300"
              >
                Ver Demo
              </a>
            </div>

          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="relative group bg-white rounded-lg p-4 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }}>

          <img
            className="w-[200px] h-[200px] rounded-lg mx-auto"
            src="/portafolio2.1/img/petAdoption.png"
            alt="cooper"
          />

          <h3 className="text-center py-4 text-xl font-semibold">Adopciones</h3>

          <div className="absolute inset-0 bg-white p-4 rounded-lg text-center
    opacity-100 visible
    md:opacity-0 md:invisible
    md:group-hover:visible md:group-hover:opacity-100
    transition-all duration-300
    text-[#111] flex flex-col justify-center items-center">

            <h3 className="text-xl font-semibold">Adopciones</h3>

            <p className="mt-2 text-sm">
              Sistema web desarrollado para la gestión integral de un refugio de mascotas. 
              Permite administrar mascotas, adopciones, interesados, citas, donadores e inventario, 
              facilitando el control de la información y optimizando los procesos relacionados con el cuidado
               y adopción de animales mediante una plataforma segura y organizada.

            </p>


            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/zaimont/petAdoptions.git"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Código
              </a>

              <a
                href="https://drive.google.com/file/d/1a9ZQgwfKjfNrZVqyhGTis37Ey7Hwrqqv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-[#B7959B] text-white rounded-lg hover:bg-[#6E4E4D] transition duration-300"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto 4 */}
        <div className="relative group bg-white rounded-lg p-4 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }}>

          <img
            className="w-[200px] h-[200px] rounded-lg mx-auto"
            src="/portafolio2.1/img/toDoApp.png"
            alt="cooper"
          />

          <h3 className="text-center py-4 text-xl font-semibold">ToDo App (AWS)</h3>

          <div className="absolute inset-0 bg-white p-4 rounded-lg text-center
    opacity-100 visible
    md:opacity-0 md:invisible
    md:group-hover:visible md:group-hover:opacity-100
    transition-all duration-300
    text-[#111] flex flex-col justify-center items-center">

            <h3 className="text-xl font-semibold">ToDo App</h3>

            <p className="mt-2 text-sm">
              Aplicación web de gestión de tareas que permite crear, editar, eliminar 
              y organizar actividades. La información se almacena localmente mediante 
              Local Storage, y la aplicación fue preparada para su despliegue en contenedores 
              Docker y entornos AWS.


            </p>


            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/zaimont/ToDo-app-aws-docker.git"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Código
              </a>

              <a
                href="https://drive.google.com/file/d/1a9ZQgwfKjfNrZVqyhGTis37Ey7Hwrqqv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-[#B7959B] text-white rounded-lg hover:bg-[#6E4E4D] transition duration-300"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </div>


        {/* Proyecto 5 */}
        <div className="relative group bg-white rounded-lg p-4 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }}>

          <img
            className="w-[200px] h-[200px] rounded-lg mx-auto"
            src="/portafolio2.1/img/innovabank.png"
            alt="cooper"
          />

          <h3 className="text-center py-4 text-xl font-semibold">InnovaBank</h3>

          <div className="absolute inset-0 bg-white p-4 rounded-lg text-center
    opacity-100 visible
    md:opacity-0 md:invisible
    md:group-hover:visible md:group-hover:opacity-100
    transition-all duration-300
    text-[#111] flex flex-col justify-center items-center">

            <h3 className="text-xl font-semibold">InnovaBank</h3>

            <p className="mt-2 text-sm">
             Banca digital que por medio de inteligencia artificial te dice si eres solvente o no. Si eres
              solvente, te muestra opciones de crédito e inversiones que se ajustan a tu nivel de solvencia.


            </p>


            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/zaimont/MODELO-IA-INNOVABANK.git"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Código
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-[#B7959B] text-white rounded-lg hover:bg-[#6E4E4D] transition duration-300"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </div>


        {/* Proyecto 6 */}
        <div className="relative group bg-white rounded-lg p-4 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }}>

          <img
            className="w-[200px] h-[200px] rounded-lg mx-auto"
            src="/portafolio2.1/img/CdeDatos.png"
            alt="cooper"
          />

          <h3 className="text-center py-4 text-xl font-semibold">Procesamiento de datos con Python</h3>

          <div className="absolute inset-0 bg-white p-4 rounded-lg text-center
    opacity-100 visible
    md:opacity-0 md:invisible
    md:group-hover:visible md:group-hover:opacity-100
    transition-all duration-300
    text-[#111] flex flex-col justify-center items-center">

            <h3 className="text-xl font-semibold">Procesamiento de datos con Python</h3>

            <p className="mt-2 text-sm">
             análisis de datos relacionados con la calidad del agua, utilizando 
             técnicas de aprendizaje automático y modelado predictivo para detectar 
             irregularidades e identificar áreas de alto riesgo. Con el fin de mejorar 
             el acceso al agua segura y minimizar los riesgos para la salud de la población.

            </p>


            <div className="flex gap-3 mt-4">
              <a
                href="https://colab.research.google.com/drive/1wvyczwXkP0Et5Jy8h37dXaLoKm12IJ-f?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Código
              </a>

              <a
                href="https://colab.research.google.com/drive/1wvyczwXkP0Et5Jy8h37dXaLoKm12IJ-f?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-[#B7959B] text-white rounded-lg hover:bg-[#6E4E4D] transition duration-300"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </div>
       


      </div>
    </div>

  )
}

export default Projects;