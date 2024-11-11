/* eslint-disable jsx-a11y/alt-text */
import styled from '@emotion/styled'
import React, { useState } from 'react'
import HeroSlider from '../../components/HeroSlider'
import RadioPill from '../../components/RadioPill.jsx'
import * as S from './home.styles.jsx'

export default function Home() {
  const [selectedBox, setSelectedBox] = useState("empresa")
  const [selectedLine, setSelectedLine] = useState("comercial")
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  const heroImagesUrls = ['/img/hero/hero1.png', '/img/hero/hero2.png', '/img/hero/hero3.png'];
  const heroMobileImagesUrls = ['/img/hero/mobile-hero1.png', '/img/hero/mobile-hero2.png', '/img/hero/mobile-hero3.png'];

  return (
    <PageContainer>
      <HeroSlider imageUrlList={vw > 1024 ? heroImagesUrls : heroMobileImagesUrls} />

      <S.HeroBoxes id="nosotros">
        <S.Box isSelected={selectedBox === "empresa"} onClick={() => setSelectedBox("empresa")}>
          <img src={process.env.PUBLIC_URL + '/img/aboutUs/empresa.png'} />
          <h4>Nuestra Empresa</h4>
        </S.Box>
        <S.Box isSelected={selectedBox === "planta"} onClick={() => setSelectedBox("planta")}>
          <img src={process.env.PUBLIC_URL + '/img/aboutUs/planta.png'} />
          <h4>Planta Industrial</h4>
        </S.Box>
        <S.Box isSelected={selectedBox === "nosotros"} onClick={() => setSelectedBox("nosotros")}>
          <img src={process.env.PUBLIC_URL + '/img/aboutUs/nosotros.png'} />
          <h4>Nosotros</h4>
        </S.Box>
      </S.HeroBoxes>

      <S.AboutUs>
        {selectedBox === "empresa" && (
          <>
            <div>
              <h3>Nuestra empresa</h3>
              <p>
                Somos una empresa especializada en la fabricación de
                electrodomésticos con una tradición de casi 70 años en el mercado. A lo largo de la historia, hemos demostrado consistentemente la calidad de nuestros productos, así como una sólida presencia en el mercado, ofreciendo a los consumidores argentinos alternativas confiables y asequibles.
                <br />
                <br />
                Nuestros productos se destacan por su nobleza, excelentes prestaciones y una relación calidad-precio inigualable.
                <br />
                <br />
                Nuestra marca se caracteriza por su enfoque en la confianza, la tradición y las implicidad. Nos esforzamos por proporcionar soluciones funcionales y elegantes para consumidores que valoran la practicidad por encima de la sofisticación y la elegancia por encima del vanguardismo. Con el paso de los años, hemos dedicado nuestros esfuerzos al desarrollo de productos exclusivos y novedosos.
                <br />
                <br />
                Además de servir al mercado de consumo, también atendemos al segmento comercial/industrial con diversas líneas de productos. En este ámbito, nos enfocamos en transmitir confianza, seguridad en el funcionamiento y practicidad en el uso de nuestros productos. Dado que se trata de bien es de uso, aseguramos una relación óptima entre precio y prestación.
              </p>
            </div>
            <img src={process.env.PUBLIC_URL + '/img/foto.png'} />
          </>
        )}
        {selectedBox === "planta" && (
          <>
            <div>
              <h3>Planta industrial</h3>
              <p>
                En nuestras instalaciones, que abarcan más de 50,000 metros cuadrados, invertimos continuamente en investigación y desarrollo (I+D) con el objetivo de diseñar productos modernos y eficientes.
                <br />
                <br />
                Nuestra empresa ha cumplido rigurosamente con los protocolos internacionales destinados a la reducción de la huella de carbono.
                <br />
                <br />
                En el marco del <b>Protocolo de Montreal</b>, hemos eliminado gases de nuestros productos que directamente afectaban la capa de ozono, reemplazándolos por compuestos 100% ecológicos y naturales. Por otro lado, en relación al <b>Protocolo de Kyoto</b>, hemos eliminado gases presentes en nuestros productos que contribuían al calentamiento global, sustituyendolos también por alternativas amigables con el medio ambiente.
                <br />
                <br />
                Briket ha implementado un importante avance al incorporar Ciclopentano como agente expansor de la espuma aislante, eliminando por completo el uso de CFCs. Además, nuestros equipos operan con el gas ecológico R-600 y R-290.
                <br />
                <br />
                Estos esfuerzos demuestran el firme compromiso de Briket con la preservación de la ecología, el respeto por la naturaleza y la convicción de que todos podemos contribuir a hacer del mundo un lugar mejor.
              </p>
            </div>
            <img src={process.env.PUBLIC_URL + '/img/planta-industrial.jpg'} />
          </>
        )}
        {selectedBox === "nosotros" && (
          <>
            <div>
              <h3>Nosotros</h3>
              <p>
                <b>Misión:</b> Nuestra misión es proporcionar productos de calidad y confiabilidad que satisfagan las necesidades de nuestros clientes en el mercado de electrodomésticos. Nos esforzamos por ofrecer soluciones innovadoras y funcionales para el hogar y los negocios. Nos comprometemos a brindar un servicio excepcional al cliente y a mantenernos a la vanguardia de las demandas del mercado.
                <br />
                <br />
                <b>Visión:</b> Aspiramos a convertirnos en la marca líder en electrodomésticos en Argentina, reconocida por la calidad de nuestros productos, la satisfacción del cliente y el compromiso con la innovación. Buscamos expandir nuestra presencia en el mercado nacional y consolidarnos como referentes en la industria de electrodomésticos, ofreciendo una amplia gama de productos confiables y adaptados a las cambiantes necesidades de los consumidores.
                <br />
                <br />
                <b>Valores:</b>
                <ul>
                  <li>
                    <u>Calidad y confiabilidad</u>: Nos esforzamos por superar las expectativas de nuestros clientes, proporcionando productos de alta calidad y confiabilidad que les brinden una experiencia satisfactoria.
                  </li>
                  <li>
                    <u>Orientación al cliente</u>: Ponemos a nuestros clientes en el centro de todo lo que hacemos. Escuchamos y comprendemos sus necesidades para ofrecer soluciones adecuadas y un servicio excepcional.
                  </li>
                  <li>
                    <u>Innovación</u>: Nos mantenemos actualizados con las últimas tendencias y exigencias del mercado. Buscamos constantemente nuevas formas de mejorar nuestros productos y procesos para mantenernos competitivos y relevantes.
                  </li>
                  <li>
                    <u>Integridad y ética</u>: Actuamos con honestidad, transparencia y responsabilidad en todas nuestras operaciones y relaciones comerciales.
                  </li>
                  <li>
                    <u>Compromiso con la comunidad</u>: Contribuimos al desarrollo sostenible de la comunidad en la que operamos, promoviendo prácticas socialmente responsables y respaldando iniciativas locales.
                  </li>
                </ul>
              </p>
            </div>
            <img src={process.env.PUBLIC_URL + '/img/foto.png'} />
          </>
        )}
      </S.AboutUs>

      <S.Title id="productos">Productos</S.Title>
      <S.ProductsCTAContainer>
        <S.ProductsBanner>Conocé todos nuestros productos</S.ProductsBanner>
        <S.ProductsCTA href='https://briket.mitiendanube.com/productos/' target='_blank'>Click Acá</S.ProductsCTA>
      </S.ProductsCTAContainer>

      <S.Productos>
        <RadioPill
          selectedOption={selectedLine}
          handleClick={(option) => setSelectedLine(option)}
        />
        <section>
          {selectedLine === "hogar" && (
            <>
              <S.Producto href='https://briket.mitiendanube.com/linea-hogar/freezers/' target='_blank'>
                <h3>Freezers</h3>
                <img src={process.env.PUBLIC_URL + "/img/productos/freezer-hogar.png"} alt="" />
                <button>Más información</button>
              </S.Producto>
              <S.Producto href='https://briket.mitiendanube.com/linea-hogar/heladeras/' target='_blank'>
                <h3>Heladeras</h3>
                <img src={process.env.PUBLIC_URL + "/img/productos/heladera.png"} alt="" />
                <button>Más información</button>
              </S.Producto>
              <S.Producto href='https://briket.mitiendanube.com/linea-hogar/exhibidoras/' target='_blank'>
                <h3>Exhibidoras</h3>
                <img src={process.env.PUBLIC_URL + "/img/productos/exhibidora-hogar.png"} alt="" />
                <button>Más información</button>
              </S.Producto>
            </>
          )}
          {selectedLine === "comercial" && (
            <>
              <S.Producto href='https://briket.mitiendanube.com/linea-comercial/freezers1/' target='_blank'>
                <h3>Freezers</h3>
                <img src={process.env.PUBLIC_URL + "/img/productos/freezer-comercial.png"} alt="" />
                <button>Más información</button>
              </S.Producto>
              <S.Producto href='https://briket.mitiendanube.com/linea-comercial/exhibidoras2/' target='_blank'>
                <h3>Exhibidoras</h3>
                <img src={process.env.PUBLIC_URL + "/img/productos/exhibidora-comercial.png"} alt="" />
                <button>Más información</button>
              </S.Producto>
            </>
          )}
        </section>
      </S.Productos>

      <S.Title id="postventa">Postventa</S.Title>
      <S.Postventa>
        <S.PostventaItem>
          <div>
            <svg version="1.0" viewBox="0 0 279.000000 279.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,279.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M1180 2770 c-17 -17 -20 -33 -20 -108 l0 -88 -71 -23 c-39 -13 -101
              -38 -137 -57 l-66 -35 -67 67 c-55 55 -71 66 -91 61 -31 -8 -298 -278 -298
              -303 0 -10 30 -48 66 -85 l65 -66 -35 -69 c-19 -39 -45 -100 -57 -137 l-22
              -67 -92 0 c-66 0 -96 -4 -104 -14 -8 -9 -11 -78 -9 -227 l3 -214 100 -5 100
              -5 31 -85 c16 -47 43 -109 58 -139 l28 -54 -66 -66 c-36 -37 -66 -73 -66 -81
              0 -19 290 -310 309 -310 7 0 44 30 82 66 l69 67 57 -31 c32 -17 92 -42 133
              -56 l75 -25 5 -93 c3 -51 9 -99 13 -105 12 -18 432 -18 444 0 4 6 10 54 13
              105 l5 93 75 25 c41 14 101 39 133 56 l57 31 69 -67 c38 -36 75 -66 82 -66 19
              0 309 291 309 310 0 8 -30 44 -66 81 l-66 66 28 54 c15 30 42 92 58 139 l31
              85 100 5 100 5 3 214 c2 149 -1 218 -9 227 -8 10 -38 14 -104 14 l-92 0 -22
              67 c-12 37 -38 98 -57 137 l-35 69 65 66 c36 37 66 75 66 85 0 25 -267 295
              -298 303 -20 5 -36 -6 -91 -61 l-67 -67 -66 35 c-36 19 -98 44 -137 57 l-71
              23 0 88 c0 132 7 128 -235 128 -182 0 -196 -1 -215 -20z m260 -507 c0 -45 -5
              -62 -22 -80 l-22 -23 -23 22 c-19 18 -23 32 -23 80 l0 58 45 0 45 0 0 -57z
              m-320 -92 c0 -52 24 -118 60 -163 28 -34 30 -43 30 -117 l0 -81 -53 0 c-100 0
              -157 -73 -122 -155 7 -19 10 -37 6 -40 -17 -10 -20 -67 -6 -100 7 -19 10 -37
              6 -40 -17 -10 -21 -67 -7 -100 10 -22 11 -36 4 -43 -17 -17 -14 -86 5 -116 23
              -35 73 -56 131 -56 36 0 46 -4 51 -20 10 -31 54 -79 88 -97 18 -9 54 -16 82
              -16 28 0 64 7 82 16 34 18 78 66 88 97 6 18 15 20 106 20 l99 0 0 -35 c0 -33
              -3 -35 -82 -74 -108 -53 -182 -71 -293 -71 -111 0 -185 18 -293 71 -386 189
              -475 710 -176 1024 47 49 165 135 186 135 4 0 8 -17 8 -39z m626 0 c32 -21 83
              -63 113 -94 59 -61 123 -155 115 -169 -3 -4 -47 -8 -99 -8 -101 0 -105 -2
              -105 -61 0 -46 -21 -34 -70 39 -41 61 -49 67 -82 70 -21 2 -38 8 -38 13 0 6
              13 27 30 47 36 45 60 111 60 163 0 22 4 39 8 39 5 0 35 -17 68 -39z m-130
              -328 c19 -26 17 -33 -11 -33 -20 0 -25 5 -25 25 0 29 17 33 36 8z m154 -353
              l0 -230 -325 0 c-318 0 -325 0 -325 20 0 17 7 20 50 20 37 0 55 5 70 20 23 23
              24 30 8 53 -9 11 -31 17 -68 19 -48 3 -55 6 -58 26 -3 20 0 22 47 22 62 0 96
              26 82 62 -7 19 -17 24 -67 28 -52 4 -59 8 -62 28 -3 20 0 22 52 22 45 0 58 4
              70 21 15 22 11 48 -8 61 -6 4 -32 8 -58 8 -48 0 -64 10 -54 35 5 13 55 15 326
              15 l320 0 0 -230z"/>
                <path d="M213 550 c-92 -22 -171 -100 -200 -199 -41 -142 59 -307 207 -340 26
              -6 213 -11 453 -11 394 0 408 1 427 20 15 15 20 33 20 70 l0 50 603 0 c578 0
              606 -1 662 -20 32 -11 68 -20 79 -20 32 0 294 90 311 107 19 18 20 122 3 145
              -7 9 -82 39 -166 66 l-153 51 -71 -25 -72 -24 -598 0 -598 0 0 48 c0 27 -7 57
              -16 70 l-15 22 -422 -1 c-232 -1 -436 -4 -454 -9z m2362 -216 c60 -20 113 -39
              117 -43 16 -14 -13 -30 -117 -65 l-111 -36 -59 20 c-56 19 -83 20 -672 20
              l-613 0 0 50 0 50 613 1 c569 0 616 2 662 19 28 10 54 19 60 19 5 1 59 -15
              120 -35z"/>
              </g>
            </svg>
          </div>
          <div style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/postventa/servicio-tecnico.png")` }}>
            <h4>Servicio Técnico</h4>
            <p>Contamos con cobertura en todo el país, consulta por localidad.</p>
            <a target="_self" role="button" href="/website_briket/#/servicio-tecnico">Consultá acá</a>
          </div>
        </S.PostventaItem>
        <S.PostventaItem>
          <div>
            <svg version="1.0" viewBox="0 0 277.000000 276.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,276.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M1058 2733 c-14 -16 -55 -79 -92 -140 -37 -62 -68 -113 -69 -113 -1
              0 -60 11 -132 25 -159 31 -180 31 -209 2 -19 -19 -25 -43 -40 -167 -9 -79 -19
              -146 -21 -148 -2 -3 -71 -21 -152 -41 -138 -34 -148 -38 -165 -67 -18 -30 -18
              -33 7 -110 14 -43 30 -97 36 -119 6 -22 15 -50 20 -63 5 -13 7 -28 3 -33 -3
              -5 -56 -47 -118 -94 -164 -122 -165 -127 -27 -287 l99 -114 -31 -55 c-16 -30
              -50 -91 -73 -137 -41 -77 -43 -85 -31 -115 11 -28 30 -41 151 -100 l139 -68
              -7 -67 c-21 -231 -21 -238 7 -266 25 -25 31 -26 139 -27 62 0 131 -3 153 -7
              l40 -7 47 -135 c49 -139 69 -170 114 -170 13 0 84 25 156 56 l133 55 105 -110
              c98 -104 107 -111 144 -111 36 0 45 7 145 111 l106 111 132 -56 c73 -31 142
              -56 154 -56 52 0 67 23 121 187 16 50 36 99 42 109 11 14 38 18 165 23 213 8
              202 -9 175 296 l-6 70 132 59 c135 61 163 83 163 130 0 13 -30 78 -67 144 -36
              65 -66 125 -66 133 0 8 43 64 95 124 76 88 95 116 95 141 0 41 -14 56 -137
              148 -56 41 -104 79 -107 84 -2 4 13 66 35 138 63 209 62 211 -126 254 -49 12
              -106 25 -126 31 l-37 9 -11 88 c-25 197 -30 216 -52 235 -28 22 -60 21 -208
              -8 -68 -13 -127 -23 -130 -20 -4 2 -36 52 -71 112 -80 137 -104 163 -146 163
              -18 0 -34 -4 -36 -8 -4 -11 -210 -154 -228 -159 -9 -2 -70 34 -137 81 -69 49
              -133 86 -146 86 -13 0 -35 -12 -49 -27z m337 -329 c15 4 72 38 126 76 55 39
              103 70 108 70 8 0 61 -74 61 -85 0 -2 20 -36 45 -75 30 -47 53 -72 70 -76 14
              -3 76 3 139 15 62 11 120 21 128 21 11 0 18 -24 28 -102 17 -139 27 -176 53
              -192 12 -7 67 -23 122 -35 149 -33 147 -31 130 -83 -64 -198 -67 -216 -50
              -245 9 -15 61 -61 116 -102 87 -64 98 -75 87 -90 -14 -18 -113 -135 -141 -166
              -41 -46 -39 -57 57 -233 l45 -82 -123 -59 c-78 -37 -128 -67 -136 -81 -9 -16
              -9 -51 -1 -140 6 -65 11 -125 11 -133 0 -12 -24 -16 -134 -19 -169 -4 -169 -3
              -222 -166 -21 -64 -39 -119 -40 -121 -2 -2 -58 20 -124 48 -67 28 -132 51
              -146 51 -19 0 -50 -26 -123 -102 l-98 -102 -98 102 c-70 73 -104 102 -121 102
              -13 0 -79 -23 -145 -51 -66 -28 -122 -49 -123 -47 -2 2 -20 54 -41 116 -20 62
              -47 125 -60 140 -23 26 -26 27 -159 30 -132 4 -136 5 -135 25 0 12 4 71 8 132
              5 63 5 119 0 133 -7 17 -42 39 -134 82 -69 33 -125 63 -125 68 0 4 4 12 9 18
              9 9 58 96 98 174 15 29 21 54 18 69 -4 14 -45 70 -93 124 l-87 100 35 26 c19
              14 68 53 110 86 l75 61 -1 49 c-1 28 -15 95 -32 150 -17 54 -30 100 -29 101 1
              2 53 14 114 28 137 32 159 40 171 63 6 10 17 74 26 142 9 69 18 127 21 130 3
              2 62 -6 130 -19 90 -17 133 -21 152 -14 19 6 46 41 97 125 l71 117 117 -80
              c98 -68 121 -79 143 -74z"/>
                <path d="M1275 2150 c-204 -33 -403 -150 -519 -308 -51 -71 -102 -176 -127
              -267 -32 -113 -32 -288 0 -399 63 -226 203 -396 410 -501 112 -56 206 -77 341
              -78 134 0 217 17 327 68 221 102 369 281 438 528 24 86 22 284 -4 378 -44 159
              -147 318 -269 415 -73 58 -218 129 -303 148 -86 20 -219 27 -294 16z m260
              -175 c198 -50 355 -194 436 -400 20 -53 23 -77 23 -200 0 -123 -3 -147 -23
              -200 -40 -101 -81 -165 -155 -239 -78 -78 -176 -134 -281 -161 -76 -19 -224
              -19 -300 0 -216 55 -393 230 -450 445 -19 71 -19 239 0 310 56 211 231 387
              440 445 69 18 237 19 310 0z"/>
                <path d="M1458 1473 l-158 -158 -62 62 c-96 93 -121 101 -169 54 -51 -51 -43
              -70 83 -198 156 -157 133 -162 366 70 101 100 190 195 199 211 28 53 -10 116
              -70 116 -28 0 -51 -19 -189 -157z"/>
              </g>
            </svg>
          </div>
          <div style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/postventa/garantia.png")` }}>
            <h4>Garantía</h4>
            <p>Contamos con cobertura en todo el país, consulta por localidad.</p>
          </div>
        </S.PostventaItem>
        <S.PostventaItem>
          <div>
            <svg version="1.0" viewBox="0 0 251.000000 277.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,277.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M936 2756 c-21 -8 -55 -27 -75 -43 -41 -33 -91 -123 -91 -165 0 -26
              -3 -28 -37 -28 -21 0 -56 -9 -78 -19 -80 -37 -115 -101 -115 -211 l0 -70 475
              0 475 0 0 82 c0 69 -4 88 -25 124 -31 53 -79 83 -143 91 -48 5 -51 7 -57 41
              -15 78 -73 155 -143 188 -48 23 -138 28 -186 10z"/>
                <path d="M145 2351 c-48 -22 -97 -70 -122 -120 -17 -34 -18 -96 -21 -1024 -1
              -662 1 -1002 8 -1027 15 -57 68 -120 125 -149 l49 -26 826 0 c918 0 856 -4
              929 67 68 67 65 45 71 566 3 259 3 472 0 472 -3 -1 -35 -40 -72 -88 l-68 -87
              0 -362 0 -363 -29 -32 -29 -33 -786 -3 c-876 -3 -843 -5 -872 63 -12 30 -14
              167 -12 1001 l3 966 33 29 c18 16 43 29 57 29 l25 0 0 -915 c0 -1000 -2 -963
              56 -985 15 -6 295 -10 700 -10 l676 0 29 29 29 29 0 212 0 212 -30 -25 c-49
              -42 -133 -77 -252 -108 -62 -16 -119 -29 -125 -29 -10 0 -13 35 -13 144 0 233
              15 265 259 573 l161 203 0 335 0 335 26 0 c33 0 61 -15 76 -43 9 -15 15 -91
              18 -245 l5 -224 70 90 70 89 -5 159 c-5 157 -5 160 -35 204 -17 24 -51 58 -75
              75 -44 29 -48 30 -182 33 l-138 4 0 -121 0 -121 -565 0 -565 0 0 120 0 120
              -132 0 c-107 0 -141 -4 -173 -19z m809 -421 c25 -27 46 -55 46 -61 0 -18 -361
              -379 -379 -379 -24 0 -211 191 -211 215 0 29 80 105 110 105 14 0 40 -15 62
              -37 l38 -37 123 122 c79 79 129 122 143 122 13 0 40 -20 68 -50z m0 -510 c25
              -27 46 -55 46 -61 0 -18 -361 -379 -379 -379 -24 0 -211 191 -211 215 0 29 80
              105 110 105 14 0 40 -15 62 -37 l38 -37 123 122 c79 79 129 122 143 122 13 0
              40 -20 68 -50z m0 -510 c25 -27 46 -55 46 -61 0 -18 -361 -379 -379 -379 -25
              0 -211 191 -211 216 0 21 89 114 110 114 6 0 31 -19 56 -42 l45 -42 122 122
              c79 79 129 122 143 122 13 0 40 -20 68 -50z"/>
                <path d="M2343 2065 c-34 -36 -50 -45 -76 -45 -24 0 -41 -9 -64 -32 -78 -82
              -724 -913 -746 -960 -29 -61 -47 -148 -47 -226 l0 -54 43 7 c105 18 198 68
              273 147 34 35 603 752 708 891 24 31 28 44 23 78 -5 35 -1 48 24 82 16 22 29
              50 29 62 0 36 -70 95 -112 95 -6 0 -31 -20 -55 -45z"/>
              </g>
            </svg>
          </div>
          <div style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/postventa/manuales.png")` }}>
            <h4>Manuales y fichas técnicas</h4>
            <p>Cada producto cuenta con un manual específico y ficha técnica donde podrás encontrar todas las especificaciones, instalación y solución de problemas frencuentes.</p>
            <p><b>Encontralas en la descripción de cada producto</b></p>
          </div>
        </S.PostventaItem>
      </S.Postventa>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  padding-top: 80px;
`