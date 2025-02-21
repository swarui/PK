import One from "../assets/one.jpeg";
import Two from "../assets/two.jpeg";
import Four from "../assets/four.jpeg";
import Five from "../assets/five.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Travelgallery() {
   useEffect(() => {
      Aos.init({ duration: 800, offset: 100, });
    }, []);
  const images = [
    {
      src: One,
      alt: "beautiful",
      description: (
        <div   data-aos="fade-up"            
        className="text-base md:text-lg lg:text-x ">
          
          With my friends at work in
          <a
            href="https://www.sarovahotels.com/maiyan-nanyuki/"
            className=" underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Sarova Maiyan, Nanyuki
          </a>{" "}
        </div>
      ),
    },
    {
      src: Two,
      alt: "beautiful",
      description: (
        <div data-aos="fade-up"    className="text-base md:text-lg lg:text-x">
          <a
            href="https://www.wrti.go.ke"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wildlife Research & Training Institute{" "}
          </a>{" "}
          with Dr. Alfred Mutua and my fellow colleagues.
        </div>
      ),
    },
    {
      src: Four,
      alt: "beautiful",
      description: (
        <div data-aos="fade-up"    className="text-base md:text-lg lg:text-x">
          {" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.masaimara.com/"
          >
            Maasai mara National Park
          </a>{" "}
          for a school research project
        </div>
      ),
    },
    {
      src: Five,
      alt: "beautiful",
      description: (
        <div data-aos="fade-up"    className="text-base md:text-lg lg:text-x">
          {" "}
          At the peak of{" "}
          <a
            className="underline"
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Mount_Kenya"
          >
            Mount Kenya
          </a>
        </div>
      ),
    },
  ];
  return (
    <>
      <div id="travelgallery"  className="scroll-mt-20" >
        <h1
          style={{ fontFamily: "Arsenica" }}
          className="text-center mt-20 text-black text-[2.5em] md:text lg:text-5xl "
        >
          Travel Gallery{" "}
        </h1>
        <h2
          style={{ fontFamily: "Afacad" }}
          className="text-blue-800 text-base text-center md:text-lg lg:text-x"
        >
Work Visits        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 p-4">
          {images.map((image, index) => (
            <div   key={index} className="relative">
              
              <img  data-aos="fade-up"
                src={image.src}
                alt={image.alt}
                className="object-cover w-full aspect-video rounded-lg"
              />
              <p
                style={{ fontFamily: "Afacad" }}
                className="text-center mt-2 text-gray-700"
              >
                {image.description}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Travelgallery;
