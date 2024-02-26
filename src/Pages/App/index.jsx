/* Renderizado para multiples modulo */
//import { UseRoutes } from "react-router-dom";

import Developers from "../Developers";
import Home from "../Home";
import Slider from "react-slick"; //crear carrusel funcional
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

export default function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    sliteToShow: 3,
    slideToScroll: 1,
    //autoplaySpeed: 3000,
    //autoplay: true,
  };
  return (
    <>
      <div>
        <h1 className="text-3x1 font-bold underline pb-10">Welcome Devs</h1>
      </div>
      {/* <div className="grid grid-cols-10 gap-2 my-6">
        <div className="bg-violet-50 aspect-square"></div>
        <div className="bg-violet-100 aspect-square"></div>
        <div className="bg-violet-200 aspect-square"></div>
        <div className="bg-violet-300 aspect-square"></div>
        <div className="bg-violet-400 aspect-square"></div>
        <div className="bg-violet-500 aspect-square"></div>
        <div className="bg-violet-600 aspect-square"></div>
        <div className="bg-violet-700 aspect-square"></div>
        <div className="bg-violet-800 aspect-square"></div>
        <div className="bg-violet-900 aspect-square"></div>
      </div> */}
      {/* <button
        className="bg-sky-400 font-bold py-2 px-2 rounded text-white my-2 hover:bg-sky-700"
        onClick={() => window.open("https://twitter.com/midudev", "_blank")}
      >
        Tutoriales
      </button> */}
      <div className="w-3/4 m-auto bg-violet-100 pb-8 pt-10 ">
        <div className="mt-30 ">
          <Slider {...settings}>
            {/* iterar sobre la matriz de datos para
          crear diapositiva para cada elemento */}
            {data.map((d) => (
              <div key={d.name}>
                <div className="bg-white h-[300px] text-black rounded-xl py-8 bg-black">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-60 w-60 rounded-md bg-white flex-initial m-auto"
                  />
                </div>
                <div className="flex flex-col item-center justify-center gap-5 p-5">
                  <p className="text-x1 font-semibold"> {d.name} </p>
                  <p className="text-center"> {d.review} </p>
                  <button className="bg-indigo-400 text-white text-lg px-4 py-2">
                    Mis Tutoriales
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Developers />
      <Home />
    </>
  );
}

const data = [
  {
    name: "Miguel Ángel Duran - Midudev",
    img: "./src/assets/images/midu.png",
    review: "Software Engineer",
  },
  {
    name: "Brais Moure - MoureDev",
    img: "./src/assets/images/brais.png",
    review: "Software Engineer",
  },
  {
    name: "Nicolás Schürmann Lindemann - HolaMundo",
    img: "./src/assets/images/nicolas.jpg",
    review: "Senior Software Developer",
  },
];
