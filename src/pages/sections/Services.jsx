import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/a11y";
import "swiper/css/controller";

import messages from "./../../assets/messages.svg";
import esecutore from "./../../assets/esecutore.svg";
import buildings from "./../../assets/buildings.svg";
import hands from "./../../assets/hands.svg";
import generations from "./../../assets/generations.svg";

export default function Services() {
  return (
    <>
      <div className="services">
        <div className="container mx-auto py-24">
          <h2 className="h2 text-center">
            Tanti servizi tutti inclusi nella custodia
          </h2>
          <div className="my-20">
            <Swiper
              className="py-20"
              modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className="w-4/12 slider-card text-center">
                  <img src={messages} alt="messages" className="mx-auto mb-8" />
                  <p className="body1">Gestore dedicato</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-4/12 slider-card text-center">
                  <img
                    src={esecutore}
                    alt="messages"
                    className="mx-auto mb-8"
                  />
                  <p className="body1">Nomina di un esecutore</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-4/12 slider-card text-center">
                  <img
                    src={buildings}
                    alt="messages"
                    className="mx-auto mb-8"
                  />
                  <p className="body1">
                    Apertura di rapporti intestati a società e fiduciarie
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-4/12 slider-card text-center">
                  <img src={hands} alt="messages" className="mx-auto mb-8" />
                  <p className="body1">Apertura di rapporti cointestati</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-4/12 slider-card text-center">
                  <img
                    src={generations}
                    alt="messages"
                    className="mx-auto mb-8"
                  />
                  <p className="body1">Passaggio generazionale</p>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* <ul className="flex flex-row flex-wrap items-baseline justify-center">
              <li className="w-4/12 text-center  gap-4">
                <img src={esecutore} alt="messages" className="mx-auto mb-8" />
                <p className="body1">Nomina di un esecutore</p>
              </li>
              <li className="w-4/12 text-center  gap-4">
                <img src={buildings} alt="messages" className="mx-auto mb-8" />
                <p className="body1">
                  Apertura di rapporti intestati a società e fiduciarie
                </p>
              </li>
              <li className="w-4/12 text-center  gap-4">
                <img src={hands} alt="messages" className="mx-auto mb-8" />
                <p className="body1">Apertura di rapporti cointestati</p>
              </li>
              <li className="w-4/12 text-center  gap-4">
                <img
                  src={generations}
                  alt="messages"
                  className="mx-auto mb-8"
                />
                <p className="body1">Passaggio generazionale</p>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}
