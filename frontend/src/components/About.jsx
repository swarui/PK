// import Kardita4 from "../assets/Kardita4.png";
import Kardita4 from "../assets/Kardita4.webp";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div id="about" className="scroll-mt-20">
      <div className="sm:mt-20">
        <h1
          style={{ fontFamily: "Arsenica" }}
          className="text-center text-black text-[2.5em] sm:text-3xl md:text-3xl lg:text-5xl"
        >
          Get to know me :)
        </h1>
        <h2
          style={{ fontFamily: "Afacad" }}
          className="text-blue-800 text-base text-center md:text-lg lg:text-x"
        >
About        </h2>

        <div className="flex flex-col sm:flex-row mt-10">
          {/* Image Section */}
          <div className="w-full sm:w-1/2 flex justify-center p-5">
            <img className="w-[95%] sm:w-[400px] lg:w-[500px] h-auto object-contain" src={Kardita4} alt="Phoebe" />
          </div>

          {/* Text Section */}
          <div className="w-full sm:w-1/2 sm:mt-[5vh] lg:mt-[10vh] text-black text-center sm:text-left px-5">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-[1.3em]  " style={{ fontFamily: "Afacad" }}>
              I am passionate about Hospitality, Tourism, and Hotel Management,
              seeking to join a dynamic organization where I can grow my skills, address challenges, and create sustainable solutions.
            </h1>

            <h1 className="text-base sm:text-lg md:text-xl lg:text-[1.3em] mt-3 lg:mt-8 md:mt-4" style={{ fontFamily: "Afacad" }}>
              I’m dedicated to achieving goals with a focus on quality, continuous improvement, and delivering exceptional guest experiences.
            </h1>

            <h1 className="text-base sm:text-lg md:text-xl lg:text-[1.3em] mt-3 lg:mt-8 md:mt-4" style={{ fontFamily: "Afacad" }}>
              I am committed to growth, innovation, and making a meaningful impact through dedication and continuous learning.
            </h1>

            {/* <h1 className="text-base sm:text-lg md:text-xl lg:text-[1.3em] mt-5" style={{ fontFamily: "Afacad" }}>
              My socials 👇🏾
            </h1>

            <div className="flex gap-4 sm:mt-5 justify-center sm:justify-start">
              <FaInstagram size={30} />
              <FaLinkedin size={30} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
