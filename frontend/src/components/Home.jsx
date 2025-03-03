// import Kardita3 from "../assets/Kardita3.png"
import Kardita3 from "../assets/Kardita3.webp"


function Home() {
  return (
    <div id="home" className="  min-h-screen flex items-center justify-center">
      <div className="flex sm:flex-row flex-col w-full max-w-screen-xl px-4 sm:px-6">
        {/* Left Text Body */}
        <div className="w-full mt-10 sm:w-1/2 flex flex-col justify-center items-center space-y-4 sm:space-y-5">
          <h1
            style={{ fontFamily: "Arsenica", fontWeight: "500" }}
            className="xl:text-8xl lg:text-7xl sm:text-6xl text-4xl text-black"
          >
            Hey,
          </h1>

          <h1
            style={{ fontFamily: "Arsenica", fontWeight: "300" }}
            className="xl:text-8xl lg:text-7xl sm:text-6xl text-4xl text-black mt-2 sm:-mt-3"
          >
            I'm Phoebe
          </h1>

          <h2
            style={{ fontFamily: "Afacad" }}
            className="text-base sm:text-lg md:text-xl lg:text-[1.3em] text-black/90 max-w-xl text-center"
          >
            A results-driven team player with strong communication and interpersonal skills. As a born-again Christian,
            I am deeply committed to achieving goals with integrity, dedication, and a solid work ethic.
          </h2>

          <div className="flex gap-4 sm:gap-5 mt-2">
            <button
              style={{ fontFamily: "Afacad" }}
              className="bg-blue-400 text-white text-sm sm:text-base lg:text-lg px-5 py-1.5 sm:px-6 sm:py-2 lg:px-10 hover:bg-blue-800 transition-all"
            >
              Resume
            </button>
            <button
  style={{ fontFamily: "Afacad" }}
  className="border border-blue-400 text-sm sm:text-base lg:text-lg text-black px-5 py-1.5 sm:px-6 sm:py-2 lg:px-8 hover:border-blue-600 hover:text-blue-600 transition-all"
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Contact Me
</button>

          </div>
        </div>

        {/* Image Body */}
        <div className=" w-full sm:w-1/2 flex items-center justify-center sm:justify-end mt-10 sm:mt-0">
          <img
            className="mt-10 w-[95%] sm:w-[400px] lg:w-[500px] h-auto object-contain"
            src={Kardita3 || "/placeholder.svg"}
            loading="lazy"
            alt="Phoebe"
          />
        </div>
      </div>
    </div>
  )
}

export default Home

