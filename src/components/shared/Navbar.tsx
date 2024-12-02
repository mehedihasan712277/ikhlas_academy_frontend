import Image from "next/image"

import logo from "@/assets/5.png"
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="flex justify-between items-center py-2">
                    {/* ---------------logo------------- */}
                    <div>
                        <Image src={logo} alt="logo" width={90} className="rounded-full"></Image>
                    </div>
                    {/* ---------------menu------------- */}
                    <div>
                        <ul className="flex gap-5 items-center font-bold text-gray-300">
                            <li className="bg-green-500 px-4 py-2 rounded-full text-gray-200">হোম</li>
                            <li>আমাদের সম্পর্কে</li>
                            <li>কোর্স সমুহ</li>
                            <li>
                                <span>
                                    লগ ইন
                                </span>
                                /
                                <span>
                                    রেজিস্টার
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar