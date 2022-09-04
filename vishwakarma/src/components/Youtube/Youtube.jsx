import React from "react";
import Winni from "../../png/winni.png";
import Bercos from "../../png/bercos.jpg";
import Yang from "../../png/yangkiez.png";


import { Swiper, SwiperSlide } from "swiper/react";


import "./Youtube.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



import { Autoplay, Pagination, Navigation } from "swiper";
const Youtube = () => {
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
      <SwiperSlide>
        
     <div className="b">

           <div className="b-right">
           <iframe width="420" height="345" src="https://youtu.be/FF0PVLaqrCo"></iframe>
           </div>
         <div className="b-left">
         <div className="text-b">
  
         <div className="B-right">
             <img src={Bercos} alt="" />
           </div>
          <p>Watch how <i><b>Berco's</b></i> handles all their operations easily, with <span className="red">Petpooja</span></p>


        </div>
             
         </div>

      </div>


      </SwiperSlide>
      <SwiperSlide>

      <div className="b">

<div className="b-right">
<iframe width="420" height="345" src="https://youtu.be/aIl-l1wUa6s"></iframe>
</div>
<div className="b-left">
<div className="text-b">

<div className="B-right">
  <img src={Winni} alt="" />
</div>
<p>See how Winni manages thier  <i><b>156+ outlets</b></i> smoothly, using <span className="red">Petpooja.</span></p>


</div>
  
</div>

</div>

      </SwiperSlide>
      <SwiperSlide>

      <div className="b">

<div className="b-right">
<iframe width="420" height="345" src="https://youtu.be/aIl-l1wUa6s"></iframe>
</div>
<div className="b-left">
<div className="text-b">

<div className="B-right">
  <img src={Yang} alt="" />
</div>
<p>See why Masterchef Aditi <i><b>"Momo Mami"</b></i> <br/> loves <span className="red">Petpooja!</span></p>


</div>
  
</div>

</div>

      </SwiperSlide>


    </Swiper>
  </>
  );
};

export default Youtube;
