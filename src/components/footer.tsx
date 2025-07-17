import React from "react";

function Footer() {
    return (
        <div className="m-20 flex flex-col justify-center items-center text-center">
            <div className="grid grid-cols-2 justify-center items-center gap-4">
                <a href="https://github.com/zaimont"><img className="hover:scale-105  transition-transform hover: rounded-full border-3 border-[#B7959B]" src="/portafolio2.1/img/github.gif" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/montserrat-lozano-154936271/"><img className=" hover:scale-105 transition-transform  rounded-full size-13 border-3 border-[#B7959B]" src="/portafolio2.1/img/linkdin.gif" alt="" /></a>

            </div>
            <div className="fixed bottom-0 left-0 w-full bg-[#1a1a1a] py-2">
                <p className="text-center text-[14px] text-amber-50">&copy; 2025 Montserrat Lozano. Todos los derechos reservados</p>
            </div>
        </div>
    )
}

export default Footer;