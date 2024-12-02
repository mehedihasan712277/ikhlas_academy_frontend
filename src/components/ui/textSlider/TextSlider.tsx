"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './TextSlider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TextForSlider } from '../../../../models/data';

const TextSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    TextForSlider.map((ele, i) => {
                        return <div key={i}>
                            <SwiperSlide>
                                <div className='px-4'>
                                    <p className='text-center text-gray-200'>
                                        {ele.description}
                                    </p>
                                    <p className='text-center font-bold pt-3 text-gray-200'>
                                        {ele.ref}
                                    </p>
                                </div>
                            </SwiperSlide>
                        </div>
                    })
                }
            </Swiper>
        </>
    );
}


export default TextSlider;
