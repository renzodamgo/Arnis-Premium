/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from "./shared/footer";
import NavBar from "./shared/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from 'react';

export default function Home() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const settings_main = {
    fade:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const settings_sec = {
    // fade: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 4024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },

    ]
  };

  const setting_bg = {
    fade: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    // autoplaySpeed: 3000,
  }

  const setting_bg_2 = {
    fade: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    // autoplaySpeed: 3000,
  }

  return (
    <div>
      <Head>
        <title>Arnis Premium</title>
        <meta
          name="description"
          content="Te ofrecemos todo lo
                    necesario para una
                    parrilla, almuerzo
                    o reunión perfecta
                    entre amigos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main >
        <section id={styles.hero} >
          <div className={styles.container}>
            <div id="mobile">
            <img id={styles.logo} src="/img/hero_logo.png" alt="Logo Arnis Premium" />

            </div>
            <h1>Te ofrecemos todo lo <br/>
              necesario para una<br />
              parrilla, almuerzo<br />
              o reunión perfecta<br />
              entre amigos</h1>
            <p>Pollo, cerdo, res, pescado, mariscos,<br />
              embutidos y mucho más...</p>
            <a href="https://api.whatsapp.com/send/?phone=51974311302&text&app_absent=0" target="_blank" rel="noreferrer">
              <button>Haz tu pedido</button>
            </a>
          </div>
          <div id="desktop">
            <img id={styles.logo} src="/img/hero_logo.png" alt="Logo Arnis Premium" />
          </div>

          <div className={styles.bg}>
            <Slider {...setting_bg}>
              <div className={styles.bg_slider}>
                <img src="/img/hero_bg_1.png" alt="Pollo a la parrilla" />

              </div>
              <div className={styles.bg_slider}>
                <img src="/img/hero_bg_2.png" alt="Pollo a la parrilla" />

              </div>
              <div className={styles.bg_slider}>
                <img src="/img/hero_bg_3.png" alt="Pollo a la parrilla" />

              </div>
              <div className={styles.bg_slider}>
                <img src="/img/hero_bg_4.png" alt="Pollo a la parrilla" />

              </div>
              {/* <h2>dsa</h2> */}
            </Slider>
          </div>
        </section>
        <section id={styles.miedos} >
          <div className={styles.container}>
            <h2>Si planeas tener una
              parrilla o almuerzo
              entre amigos, es muy
              probable que...</h2>
            <div className={styles.miedos_elements}>
              <div className={styles.miedos_element}>
                <img src="/img/miedos_1.svg" alt="reloj" />
                <p>No tengas el tiempo
                  necesario para comprar
                  todos los insumos
                  en diferentes lugares.</p>
              </div>
              <div className={styles.miedos_element}>
                <img src="/img/miedos_2.svg" alt="dinero" />
                <p>Los precios de los
                  productos no sean
                  los mismos de tu
                  presupuesto.</p>
              </div>
              <div className={styles.miedos_element}>
                <img src="/img/miedos_3.svg" alt="platos" />
                <p>Estés cansado de
                  comer los mismos platos
                  de siempre en todas
                  tus reuniones.</p>
              </div>
              <div className={styles.miedos_element}>
                <img src="/img/miedos_4.svg" alt="pregunta" />
                <p>No sepas para
                  cuantas personas
                  alcanzarán los insumos
                  que compraste</p>
              </div>
            </div>

          </div>

        </section>
        <section id={styles.beneficios} >
          <div className={styles.container}>
            <h2>Sin embargo, te gustaría...</h2>
            <div className={styles.beneficios_elements}>
              <div className={styles.beneficios_element}>
                <img src="/img/deseos_1.png" alt="" />
                <p>Evitar el tráfico de
                  la ciudad y evitar las
                  largas colas en
                  supermercados. </p>

              </div>
              <div className={styles.beneficios_element}>
                <img src="/img/deseos_2.png" alt="" />
                <p>Orientación en cuanto
                  a qué productos te
                  conviene comprar
                  para tu reunión.</p>

              </div>
              <div className={styles.beneficios_element}>
                <img src="/img/deseos_3.png" alt="" />
                <p>Encontrar todo lo que
                  necesitas en un paquete
                  pensado para tu
                  evento social. </p>

              </div>
              <div className={styles.beneficios_element}>
                <img src="/img/deseos_4.png" alt="" />
                <p>Productos de calidad y marcas reconocidas
                  en un solo lugar.</p>

              </div>
            </div>
          </div>

        </section>
        <section id={styles.quien_soy} >
          <div className={styles.container}>
            <img id={styles.logo} src="/img/hero_logo.png" alt="Logo Arnis premium" />

            <h2 >Hola, somos<br /> Arni&apos;s Premium...</h2>
            <p>Una empresa peruana comercializadora de productos cárnicos. de reconocidas marcas. Nuestra misión es la de poder llevar productos de la más alta calidad a más personas.
            </p>
            <p>

              Somos muy dedicados y pensamos mucho en crear soluciones completas para nuestros clientes. Es debido a esto que ofrecemos paquetes de productos para unir a amigos, familiares y personas muy cercanas e invitarlos a compartir buenos momentos juntos.
            </p>
            <div className={styles.bg}>
              <Slider {...setting_bg_2}>
                <div className={styles.bg_slider}>
                  <img src="/img/quien_soy_bg_1.png" alt="Pollo a la parrilla" />

                </div>
                <div className={styles.bg_slider}>
                  <img src="/img/quien_soy_bg_2.png" alt="Pollo a la parrilla" />

                </div>

                {/* <h2>dsa</h2> */}
              </Slider>
            </div>
          </div>

        </section>
        <section id={styles.propuesta} >
          <div className={styles.container}>
            <h1 id="mobile">
              Encuentra estas y muchas
              más ofertas increíbles en
              nuestro catálogo virtual..
            </h1>
            <div className={styles.slider_text}>

              <div id="main_slider" className={styles.main_slider}>
                <Slider {...settings_main} asNavFor={nav2}
                  ref={slider => (setNav1(slider))}>
                  <div>
                    <img src="/img/arnis_pack_1.jpeg" alt="arnis pack" />
                  </div>
                  <div>
                    <img src="/img/arnis_pack_2.jpeg" alt="arnis pack" />
                  </div>
                  <div>
                    <img src="/img/arnis_pack_3.jpeg" alt="arnis pack" />
                  </div>
                  <div>
                    <img src="/img/arnis_pack_4.jpeg" alt="arnis pack" />
                  </div>
                  <div>
                    <img src="/img/arnis_pack_5.jpeg" alt="arnis pack" />
                  </div>
                  <div>
                    <img src="/img/arnis_pack_6.jpeg" alt="arnis pack" />
                  </div>
                  <div>
                    <img src="/img/arnis_pack_7.jpeg" alt="arnis pack" />
                  </div>
                  {/* <div>
                    <img src="/img/arnis_pack_8.jpeg" alt="arnis pack" />
                  </div> */}
                  <div>
                    <img src="/img/pack_otto_1.jpeg" alt="otto pack" />
                  </div>
                  <div>
                    <img src="/img/pack_otto_2.jpeg" alt="otto pack" />
                  </div>
                  <div>
                    <img src="/img/pack_otto_3.jpeg" alt="otto pack" />
                  </div>
                  <div>
                    <img src="/img/pack_otto_4.jpeg" alt="otto pack" />
                  </div>
                </Slider>

              </div>
              <div>
                <h1 id="desktop">
                  Encuentra estas y muchas
                  más ofertas increíbles en
                  nuestro catálogo virtual..
                </h1>
                <a href="https://api.whatsapp.com/send/?phone=51974311302&text&app_absent=0" target="_blank" rel="noreferrer">

                <button id="desktop">Haz tu pedido</button>
                </a>
              </div>
            </div>
            <div id="sec_slider">
              <Slider {...settings_sec} asNavFor={nav1}
                ref={slider => (setNav2(slider))}
                swipeToSlide={true}
                focusOnSelect={true}>
                <div>
                  <img className={styles.slider_img} src="/img/arnis_pack_1.jpeg" alt="arnis pack" />
                </div>
                <div>
                  <img className={styles.slider_img} src="/img/arnis_pack_2.jpeg" alt="arnis pack" />
                </div>
                <div>
                  <img className={styles.slider_img} src="/img/arnis_pack_3.jpeg" alt="arnis pack" />
                </div>
                <div>
                  <img className={styles.slider_img} src="/img/arnis_pack_4.jpeg" alt="arnis pack" />
                </div>
                <div>
                  <img className={styles.slider_img} src="/img/arnis_pack_5.jpeg" alt="arnis pack" />
                </div>
                <div>
                  <img className={styles.slider_img} src="/img/arnis_pack_6.jpeg" alt="arnis pack" />
                </div>
                <div>
                  <img className={styles.slider_img} src="/img/arnis_pack_7.jpeg" alt="arnis pack" />
                </div>
                {/* <div>
                  <img className={styles.slider_img} src="/img/arnis_pack_8.jpeg" alt="arnis pack" />
                </div> */}
                <div>
                  <img className={styles.slider_img} src="/img/pack_otto_1.jpeg" alt="otto pack" />
                </div>
                <div>
                  <img className={styles.slider_img} src="/img/pack_otto_2.jpeg" alt="otto pack" />
                </div>
                <div>
                  <img className={styles.slider_img} src="/img/pack_otto_3.jpeg" alt="otto pack" />
                </div>
                <div>
                  <img className={styles.slider_img} src="/img/pack_otto_4.jpeg" alt="otto pack" />
                </div>
              </Slider>

            </div>
            <a href="https://api.whatsapp.com/send/?phone=51974311302&text&app_absent=0" target="_blank" rel="noreferrer">

            <button id="mobile">Haz tu pedido</button>
            </a>
          </div>
        </section>
        <section id={styles.testimonios} >
          <div className={styles.container}>
            <h2>Lo que dicen <br />
              nuestros clientes...</h2>
            <div className={styles.testimonios_elements}>
              <div className={styles.testimonios_element}>
                <p>“Estaba preocupado porque
                  era la primera vez que pedía un paquete así, pero al final ahorré tiempo y dinero”</p>
                <p className={styles.nombre}>Diego Lopez</p>
              </div>
              <div className={styles.testimonios_element}>
                <p>“La atención no tiene igual, se preocupan mucho por guiarte y te recomiendan variedad de opciones”</p>
                <p className={styles.nombre}>JUAN ECHEGARAY</p>
              </div>
              <div className={styles.testimonios_element}>
                <p>“Llegaron a tiempo y cumplieron con la promesa del delivery gratuito. Super recomendado”</p>
                <p className={styles.nombre}>JULIO PEREZ</p>
              </div>
            </div>
          </div>

        </section>
        <section id={styles.lead_magnet} >
          <div className={styles.container}>
            <div id="mobile">
              <h2> TE GUSTARIA <br />
                CONSEGUIR <br />
                <span id={styles.accent}> delivery <br />
                  gratis </span>en <br />
                tu primer <br />
                pedido?</h2>
            </div>
            <div id="desktop">
              <h2> TE GUSTARIA
                CONSEGUIR <br />
                <span id={styles.accent}> delivery
                  gratis </span>en
                tu  <br />primer
                pedido?</h2>
            </div>

            <button>
              Delivery <br /> Gratis
            </button>
          </div>
        </section>
        <section id={styles.hero_footer} >
          <div className={styles.container}>
            <img id={styles.logo} src="/img/hero_logo.png" alt="Logo anis" />
            <h2>Si tienes pensado<br/>
              armar una parrillada,<br />
              almuerzo o reunión<br />
              entre amigos</h2>
            <a href="https://api.whatsapp.com/send/?phone=51974311302&text&app_absent=0" target="_blank" rel="noreferrer">

            <button>Haz tu pedido</button>
            </a>
          </div>
          <div className={styles.bg}>
            <img src="/img/hero_footer_bg.png" alt="Parrilla" />
          </div>
        </section>
      </main>

      <footer >
        <Footer/>
      </footer>
    </div>
  );
}
