import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { FaCalendar } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 800, offset: 100, });
  }, []);
  
  return (
    <>
      <div id="experience" className="scroll-mt-20">
      <div
          className="flex flex-col items-center justify-center min-h-screen"
        >
          {/* Vertical Line */}
          {/* <div className="absolute left-[8%] top-[3.5vh] w-[1px] h-full bg-red-700 md:left-[4%]"></div> */}

          {/* Experience Section */}
          <div className="mt-10">
            {" "}
            {/* Adjust margin to position cards relative to the vertical line */}
            <h1
              style={{ fontFamily: "Arsenica" }}
              className="text-center text-black text-[2.5em] md:text lg:text-5xl "
            >
              Work Journey
            </h1>
            <h2
          style={{ fontFamily: "Afacad" }}
          className="text-blue-800 text-base text-center md:text-lg lg:text-x"
        >
          Experience        </h2>
            {/* Experience Cards */}
            <Card
              style={{ fontFamily: "Afacad" }}
              className="w-f m-5 p-3 mt-10 border border-blue-800 rounded-lg 
              "
              data-aos="fade-up"

            >
              <CardHeader color="light-blue" className="text-black p-2  ">
                <Typography
                  className="text-sm md:text-base lg:text-lg "
                  variant="h5"
                  color="black"
                >
                  Sarova Maiyan, Nanyuki
                </Typography>
                <div className="flex justify-between">
                  <Typography
                    variant="subtitle1"
                    color="white"
                    className="opacity-80 text-blue-800 text-sm md:text-base lg:text-lg "
                  >
                    Attachment Intern
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="white"
                    className="opacity-70 text-xs md:text-sm lg:text-base   text-blue-800 flex items-center gap-2"
                  >
                    <FaCalendar />
                    April 15, 2024 – July 15, 2024
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="p-4">
                <ul className="list-disc pl-5 space-y-1 md:space-y-2 lg:space-y-2 text-base md:text-lg lg:text-x  ">
                  <li>
                    Specialized in bar service, preparing and serving cocktails,
                    coffee, and other beverages.
                  </li>
                  <li>
                    Provided excellent customer service in both the bar and
                    restaurant areas.
                  </li>
                  <li>
                    Assisted in daily service operations, improving time
                    management and problem-solving skills.
                  </li>
                  <li>
                    Familiarized with the operational structure and workflow of
                    a 4-star hotel.
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card
              style={{ fontFamily: "Afacad" }}
              className="w-f m-5  p-3 lg:mt-20 md:mt-10 mt-10 border border-blue-800 rounded-lg "
              data-aos="fade-up"

            >
              <CardHeader color="light-blue" className="text-black p-2  ">
                <Typography
                  className="text-sm md:text-base lg:text-lg "
                  variant="h5"
                  color="black"
                >
                  Enashipai Resort and Spa
                </Typography>
                <div className="flex justify-between">
                  <Typography
                    variant="subtitle1"
                    color="white"
                    className="opacity-80 text-blue-800 text-sm md:text-base lg:text-lg "
                  >
                    Waitress{" "}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="white"
                    className="opacity-70 text-xs md:text-sm lg:text-base   text-blue-800 flex items-center gap-2"
                  >
                    <FaCalendar />
                    Nov 13, 2023 – Dec 20, 2023
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="p-4">
                <ul className="list-disc pl-5 space-y-1 md:space-y-2 lg:space-y-2 text-base md:text-lg lg:text-x ">
                  <li>
                    Greeted customers, handed out menus, and took meal and
                    beverage orders.
                  </li>
                  <li>
                    Delivered meals and beverages to tables, ensuring timely
                    service.
                  </li>
                  <li>
                    Addressed customer preferences and ensured overall
                    satisfaction.
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card
              style={{ fontFamily: "Afacad" }}
              className="w-f m-5  p-3 mt-20 border border-blue-800 rounded-lg "
              data-aos="fade-up"  data-aos-anchor-placement="top-center  "

            >
              <CardHeader color="light-blue" className="text-black p-2  ">
                <Typography
                  className="text-sm md:text-base lg:text-lg "
                  variant="h5"
                  color="black"
                >
                  Astorian Grand Hotel{" "}
                </Typography>
                <div className="flex justify-between">
                  <Typography
                    variant="subtitle1"
                    color="white"
                    className="opacity-80 text-blue-800 text-sm md:text-base lg:text-lg "
                  >
                    Room attendant{" "}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="white"
                    className="opacity-70 text-xs md:text-sm lg:text-base   text-blue-800 flex items-center gap-2"
                  >
                    <FaCalendar />
                    Dec 12, 2022 – Dec 30, 2022{" "}
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="p-4">
                <ul className="list-disc pl-5 space-y-1 md:space-y-2 lg:space-y-2 text-base md:text-lg lg:text-x  ">
                  <li>Cleaned and maintained guest rooms to high standards.</li>
                  <li>Made beds, changed linens, and sanitized bathrooms.</li>
                  <li>Inspected rooms for damages and reported issues.</li>
                  <li>
                    Ensured all room appliances and amenities were in working
                    order.
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card
              style={{ fontFamily: "Afacad" }}
              className="w-f m-5  p-3 lg:mt-20 md:mt-10 mt-10 border border-blue-800 rounded-lg "
              data-aos="fade-up"

            >
              <CardHeader color="light-blue" className="text-black p-2  ">
                <Typography
                  className="text-sm md:text-base lg:text-lg "
                  variant="h5"
                  color="black"
                >
                  Wehai Construction Company
                </Typography>
                <div className="flex justify-between">
                  <Typography
                    variant="subtitle1"
                    color="white"
                    className="opacity-80 text-blue-800 text-sm md:text-base lg:text-lg "
                  >
                    Road Construction{" "}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="white"
                    className="opacity-70 text-xs md:text-sm lg:text-base   text-blue-800 flex items-center gap-2"
                  >
                    <FaCalendar />
                    May 2020 – Nov 2020{" "}
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="p-4">
                <ul className="list-disc pl-5 space-y-1 md:space-y-2 lg:space-y-2 text-base md:text-lg lg:text-x  ">
                  <li>
                    Conducted land surveys for road construction projects.
                  </li>
                  <li>
                    Prepared detailed survey reports for road infrastructure.
                  </li>
                  <li>
                    Operated surveying instruments to ensure precise
                    measurements.
                  </li>
                  <li>
                    Collaborated with project teams for accurate mapping and
                    planning.
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card
              style={{ fontFamily: "Afacad" }}
              className="w-f m-5  p-3 lg:mt-20 md:mt-10 mt-10 border border-blue-800 rounded-lg "
              data-aos="fade-up"

            >
              <CardHeader color="light-blue" className="text-black p-2  ">
                <Typography
                  className="text-sm md:text-base lg:text-lg "
                  variant="h5"
                  color="black"
                >
                  Mt Kenya National Park{" "}
                </Typography>
                <div className="flex justify-between">
                  <Typography
                    variant="subtitle1"
                    color="white"
                    className="opacity-80 text-blue-800 text-sm md:text-base lg:text-lg "
                  >
                    Tourist Intern{" "}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="white"
                    className="opacity-70 text-xs md:text-sm lg:text-base   text-blue-800 flex items-center gap-2"
                  >
                    <FaCalendar />
                    Jan 2020 – March 2020{" "}
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="p-4">
                <ul className="list-disc pl-5 space-y-1 md:space-y-2 lg:space-y-2 text-base md:text-lg lg:text-x  ">
                  <li>Collected data and assisted in report writing.</li>
                  <li>Monitored wildlife and led bird-watching tours.</li>
                  <li>
                    Conducted community awareness and sensitization programs.
                  </li>
                  <li>Assisted with equipment maintenance and servicing.</li>
                  <li>
                    Volunteered during special events organized by the park
                    management.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
