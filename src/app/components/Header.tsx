import Image from "next/image"
import localFont from "next/font/local";

const opunMai = localFont({
  src: "../fonts/Opun Mai Medium SemiCondensed.ttf",
})

export function Header() {
    return (
        <div>
            <div className="bg-[#272727] p-2 pl-0 flex flex-row items-center container-fluid">
                <img className="h-20 ml-2"  src="logo2.svg" alt="logo" />
                <div className="flex flew-row gap-4 justify-end w-full mr-4">
                    <img src="menu.svg" alt="menu" />
                
                </div>
            </div>
        </div>
    )
}