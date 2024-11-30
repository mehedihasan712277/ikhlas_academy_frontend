import logo from "@/assets/logo.png"
import Image from "next/image"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="flex justify-between items-center py-4">
                    {/* ---------------logo------------- */}
                    <div>
                        <Image src={logo} alt="logo" width={70}></Image>
                    </div>
                    {/* ---------------menu------------- */}
                    <div>
                        <ul className="flex gap-5 items-center">
                            <li>হোম</li>
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