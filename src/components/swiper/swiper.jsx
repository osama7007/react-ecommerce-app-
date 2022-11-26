// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function SwiperCom({products}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            products.map((product , index)=>{
                return (
                    <SwiperSlide key={index}>
                        <img src={product.img} alt="productIMG"  style={{objectFit: "contain"}} />
                    </SwiperSlide>
                )
            }).slice(0 , 10)
        }
      </Swiper>
    </>
  );
}
export default SwiperCom
