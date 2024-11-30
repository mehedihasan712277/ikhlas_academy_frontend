import Image from "next/image"
import madina from "@/assets/home.png";
import TextSlider from "./textSlider/TextSlider";
const Hero = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {/* --------welcome part-------- */}
                <p className="text-[70px] leading-[70px] font-bold">
                    ইখলাস একাডেমী
                </p>
                {/* ----------slider------------ */}
                <div className="py-4">
                    <TextSlider></TextSlider>
                </div>
                {/* -------button-------------- */}
                <div>
                    <button className="bg-[#1ba49c] text-white font-bold px-4 py-2 rounded-md">
                        বিস্তারিত
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero