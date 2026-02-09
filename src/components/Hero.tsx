import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="bg-blue-950 h-[70vh] w-full grid place-items-center">
            <div className="w-1/2 text-center">
                <h1 className="font-bold text-5xl text-white">This is the headline</h1>
                <p className="mt-3 text-blue-50 text-lg">An old video of Apostle Joshua Selman has resurfaced online and is currently trending, following the ongoing debate around Pastor Kingsley Okonkwo’s newly revealed tattoo</p>
                <div className="flex items-center justify-center gap-8 mt-6">
                    <Link className="bg-amber-500 text-white font-bold h-12 w-36 flex items-center justify-center rounded-lg border-2 border-amber-200 " to={"/about"}> About Us </Link>
                    <Link className="bg-blue-950 text-white font-bold h-12 w-36 flex items-center justify-center rounded-lg border-2 border-blue-800 " to={"/contact"}> Contact Us </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero