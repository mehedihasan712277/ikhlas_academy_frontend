import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/ui/Hero"

import bg5 from "@/assets/bg7.jpg"
import Image from "next/image"

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <Image src={bg5} alt="img" className="w-full max-h-[620px]"></Image>
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14  absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
      </div>
      <div className="h-[50vh]">
        hi
      </div>
    </div>
  )
}

export default HomePage