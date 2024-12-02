import TextSlider from "./textSlider/TextSlider";
const Hero = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-white">
                {/* --------welcome part-------- */}
                <p className="text-[70px] leading-[70px] font-bold mt-20">
                    ইখলাস একাডেমী
                </p>
                {/* ----------slider------------ */}
                <div className="py-4">
                    <TextSlider></TextSlider>
                </div>
                {/* -------button-------------- */}
                <div>
                    <button className="bg-white border-2 border-white text-gray-700 font-bold px-4 py-2 rounded-md">
                        বিস্তারিত
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero