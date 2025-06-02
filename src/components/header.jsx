import React, { useState } from "react";

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="p-6 text-white text-center">
           
           
            <div className="p-2 m-2  w-full w-[80%] mx-auto">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
                    {/* Icono de menú (hamburguesa) en pantallas pequeñas */}
                    <button className="md:hidden p-2 border rounded " onClick={toggleMenu}>
                    ☰
                    </button>
                    
                    <div className={`w-full md:w-auto ${showMenu ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center md:justify-center md:mx-auto gap-4 `}>

                        <a onClick={() => setShowMenu(false)} className=" hover:scale-105 transition-transform duration-500 hover:shadow-lg p-2 transition duration-300 rounded-full border-2 border-transparent hover:border-[#684646] hover:bg-[rgba(104,70,70,0.2)]" href="home.tsx">home</a>
                        <a onClick={() => setShowMenu(false)} className="hover:scale-105 transition-transform duration-500 hover:shadow-lg p-2 transition duration-300 rounded-full border-2 border-transparent hover:border-[#684646] hover:bg-[rgba(104,70,70,0.2)]" href="#aboutMe">aboutMe</a>
                        <a onClick={() => setShowMenu(false)} className="hover:scale-105 transition-transform duration-500 hover:shadow-lg p-2 transition duration-300 rounded-full border-2 border-transparent hover:border-[#684646] hover:bg-[rgba(104,70,70,0.2)]" href="#work">work</a>
                        <a onClick={() => setShowMenu(false)} className="hover:scale-105 transition-transform duration-500 hover:shadow-lg p-2 transition duration-300 rounded-full border-2 border-transparent hover:border-[#684646] hover:bg-[rgba(104,70,70,0.2)]" href="#certificates">Certificates</a>
                        <a onClick={() => setShowMenu(false)} className="hover:scale-105 transition-transform duration-500 hover:shadow-lg p-2 transition duration-300 rounded-full border-2 border-transparent hover:border-[#684646] hover:bg-[rgba(104,70,70,0.2)]" href="#testimonials">testimonials</a>
                        <a onClick={() => setShowMenu(false)} className="hover:scale-105 transition-transform duration-500 hover:shadow-lg p-2 transition duration-300 rounded-full border-2 border-transparent hover:border-[#684646] hover:bg-[rgba(104,70,70,0.2)]" href="">contacts</a>
                    </div>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="flex flex-col md:flex-row items-center justify-between my-10 lg:p-20 lg:m-10 ">
                <div className="space-y-2 text-center md:text-left">
                    <h1 className="text-[#E4DFDE] text-[50px] md:text-[80px] font-normal leading-normal" style={{ fontFamily: "Alexandria" }}>Hi. I'm Montse</h1>
                    <p className="text-[#6E4E4D] text-[20px] md:text-[30px] font-normal" style={{
                        textShadow: "0px 4px 4px #BE9798",
                        WebkitTextStrokeWidth: "1px",
                        WebkitTextStrokeColor: "#F5F5F5",
                        fontFamily: "'Chewy', sans-serif"
                    }}>
                        Desarrolladora de Software | Científica de Datos | IA
                    </p>
                </div>
                <div className="rounded-full object-cover flex items-center justify-center w-[80%] md:w-[30%] h-[50%] md:h-[50%] border-8 border-[#B7959B] p-2 mt-6 md:mt-0 relative overflow-hidden">
                    <div className="aspect-w-1 aspect-h-1 w-full h-full">
                        <img src="../public/fotoMia.jpeg" alt="Foto de Montse" className="w-full h-full object-cover rounded-full shadow-lg" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
