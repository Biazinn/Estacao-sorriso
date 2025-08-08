import Image from "next/image"
import localFont from "next/font/local";

const opunMai = localFont({
    src: "../fonts/Opun Mai Medium SemiCondensed.ttf",
})

export function Header() {
    return (
        <div>
            <div className="bg-[#272727] p-2 pl-0 flex flex-row items-center container-fluid">
                <img className="h-20 ml-2" src="logo2.svg" alt="logo" />
                <div className="flex flew-row gap-4 justify-end w-full mr-4">
                    {/* Show menu icon on screens smaller than 880px */}
                    <img className="nav-item dropdown block lg:hidden" src="menu.svg" alt="menu" />
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                    {/* Show "sobre" text on screens 880px and larger */}

                    
                    <p className="hidden h-2 lg:block text-white text-3xl font-[Josefin_Sans]">SOBRE</p>
                    <p className="hidden h-2 lg:block text-white text-3xl font-[Josefin_Sans]">BUSCAMOS</p>
                    <p className="hidden h-2 lg:block text-white text-3xl font-[Josefin_Sans]">FUNCIONAMENTO</p>
                    <p className="hidden h-2 lg:block text-white text-3xl font-[Josefin_Sans]">OBJETIVOS</p>
                </div>
            </div>
        </div>
    )
}