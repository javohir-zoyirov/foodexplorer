import { Nav } from "../header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./homepage.css";
import maskGroup from "../image/Mask group (1).png";
import dish from "../image/Dish.png";
import dish2 from "../image/Dish2.png";
import dish3 from "../image/Dish3.png";
import dish4 from "../image/Dish4.png";
import dish5 from "../image/dish5.png";
import dish6 from "../image/dish6.png";
import dish7 from "../image/Dish7.png";
import dish8 from "../image/Dish8.png";
import dish9 from "../image/dish9.png";
import { Footer } from "../footer";
import { useState } from "react";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  return (
    <div style={{ background: "#000A0F" }}>
      <Nav />
      <div className="container mx-auto">
        <div
          style={{
            background: "linear-gradient(180deg, #091E26 0%, #00131C 100%)",
            marginTop: "170px",
            marginBottom: "70px",
          }}
          className="text-end p-5 position-relative"
        >
          <img
            style={{ bottom: "0" }}
            className="position-absolute start-0 w-50"
            src={maskGroup}
            alt="#"
          />
          <h1 className="text-white">Sabores inigualáveis</h1>
          <p className="text-white">
            Sinta o cuidado do preparo com ingredientes selecionados
          </p>
        </div>

        <div>
          <h2 className="text-white">Refeições</h2>

         <div className="gradient-box">
         <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mt-5"
          >
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <img
                  className="w-100 object-fit-cover"
                  src={dish}
                  alt="#"
                  style={{ position: "relative", zIndex: 1 }}
                />
              </div>
              <div
                className="text-white mt-5"
                style={{ position: "relative", zIndex: 2 }}
              >
                <h2 className="fw-bold">Salada Ravanello</h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish2} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Spaguetti Gambe </h2>
                <p className="text">Massa fresca com camarões e pesto.</p>
                <h1 style={{ color: "#82F3FF" }}>R$ 79,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish3} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Torradas de Parma</h2>
                <p className="text">
                  Presunto de parma e rúcula em um pão com fermentação natural.
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 25,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Salada Ravanello </h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Salada Ravanello </h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Salada Ravanello </h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
         </div>

          <h2 className="text-white">Sobremesas</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mt-5"
          >
            <SwiperSlide
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%)",
              }}
            >
              <div className="text-end ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish4} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Salada Ravanello </h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish5} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Spaguetti Gambe </h2>
                <p className="text">Massa fresca com camarões e pesto.</p>
                <h1 style={{ color: "#82F3FF" }}>R$ 79,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish6} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Torradas de Parma</h2>
                <p className="text">
                  Presunto de parma e rúcula em um pão com fermentação natural.
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 25,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish5} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Salada Ravanello </h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish4} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Salada Ravanello </h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish6} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Salada Ravanello </h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <h2 className="text-white mt-5">Bebidas</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mt-5"
          >
            <SwiperSlide
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%)",
              }}
            >
              <div className="text-end ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish7} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Salada Ravanello </h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish8} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Spaguetti Gambe </h2>
                <p className="text">Massa fresca com camarões e pesto.</p>
                <h1 style={{ color: "#82F3FF" }}>R$ 79,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish9} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Torradas de Parma</h2>
                <p className="text">
                  Presunto de parma e rúcula em um pão com fermentação natural.
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 25,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish8} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Salada Ravanello </h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish9} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Salada Ravanello </h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-pencil text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <div className="mt-4">
                <img className="w-100 object-fit-cover" src={dish7} alt="#" />
              </div>
              <div className="text-white mt-5">
                <h2 className="fw-bold">Salada Ravanello </h2>
                <p className="text">
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <h1 style={{ color: "#82F3FF" }}>R$ 49,97</h1>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg fw-bold"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>
                    <span className="fw-bold fs-4">{count}</span>
                    <button className="btn text-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                  onClick={() =>{navigate('/about-product')}}
                    style={{ background: "#750310" }}
                    className="btn border-0 text-white fw-bold"
                  >
                    incluir
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Footer />
      </div>
    </div>
  );
};
