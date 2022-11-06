import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Events = () => {
    return(
        <>
            <div className="text-center mx-auto max-w-lg shadow-lg">
                <h1 className="bg-ubd-black rounded-t-lg text-white">Events:</h1>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper max-h-lg max-w-lg rounded-b-lg">
                    <SwiperSlide>
                        <div className='w-full grid justify-items-center relative'>
                            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhumanhist.com%2Fwp-content%2Fuploads%2F2019%2F01%2Feducation.jpg&f=1&nofb=1&ipt=28e628892e54a784d79b28f91997b51725cd99549dbdaa2e1f9af50bb713db6f&ipo=images' alt="Event 1"/>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-ubd-black via-ubd-black text-white opacity-70">
                                <h1 className="text-xl font-bold">Event name</h1>
                                <p>Event Description</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full grid justify-items-center relative'>
                            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Feducation-word-with-pencil-instead-of-letter-i-and-book-study-and-vector-id1149333453&f=1&nofb=1&ipt=dc35e81a63f71a2f80b0b4abd75e8d6878c3cce88a4003292b4fbfb2cc528479&ipo=images' alt="Event 2"/>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-ubd-black via-ubd-black text-white opacity-70">
                                    <h1 className="text-xl font-bold">Event name</h1>
                                    <p>Event Description</p>
                                </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full grid justify-items-center relative'>
                        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Feducation-picture-id499365120%3Fk%3D6%26m%3D499365120%26s%3D170667a%26w%3D0%26h%3DMfyqa_lECACF2sCxG2rtDGrMWRCRTlQZJjeMlznMzso%3D&f=1&nofb=1&ipt=c409e43145b5582d7f085dffb78bd6efb3a0da37202d205f3b65829187b5e684&ipo=images' alt="Event 3"/>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-ubd-black via-ubd-black text-white opacity-70">
                                    <h1 className="text-xl font-bold">Event name</h1>
                                    <p>Event Description</p>
                                </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full grid justify-items-center relative'>
                        <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freeimageslive.co.uk%2Ffiles%2Fimages008%2Fcollege_reading.jpg&f=1&nofb=1&ipt=ab2c57121201826f2ec1c6d92c1d566108e074bcefeb90217b3db5b98d94137f&ipo=images' alt="Event 4"/>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-ubd-black via-ubd-black text-white opacity-70">
                                    <h1 className="text-xl font-bold">Event name</h1>
                                    <p>Event Description</p>
                                </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Events;