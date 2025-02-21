import Swal from "sweetalert2";
import Mocha from "../assets/Kardita2.jpg";

function Contact() {
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      message: e.target[4].value,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Thank You",
          text: "Your message was sent successfully ",
          icon: "success",
          confirmButtonColor: "#3085d6",
          background: "#000000",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            text: "text-custom",
            confirmButton: "custom-button",
            icon: "icon-custom",
          },
        });

        e.target.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
          confirmButtonColor: "#d33",
          background: "#000000",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-button",
            text: "text-custom",
          },
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
        background: "#f4f4f9",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-button",
          text: "text-custom",
          icon: "custom-icon",
        },
      });
      console.error("Error:", error);
    }
  };

  return (
    <div
      id="contact"
      className="scroll-mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header Section */}
      <div className="text-center mt-20 mb-10">
        <h1
          style={{ fontFamily: "Arsenica" }}
          className="text-center mt-20 text-black text-[2.5em] md:text lg:text-5xl "
        >
          Contact Me
        </h1>
        <h2
          style={{ fontFamily: "Afacad" }}
          className="text-blue-800 text-base text-center md:text-lg lg:text-x"
        >
          Reach Out
        </h2>
      </div>

      {/* Main Contact Section */}
      <div className="overflow-hidden">
        <section
          style={{ fontFamily: "Afacad" }}
          className="flex flex-col lg:flex-row items-stretch justify-center gap-8"
        >
          {/* Contact Form */}
          <div
            style={{
              background: "linear-gradient(to right, #d4dfed, #ffffff)",
            }}
            className="w-full lg:w-1/2 flex flex-col border-2 border-black rounded-lg p-6 shadow-lg"
          >
            <form
              onSubmit={sendEmail}
              className="flex flex-col space-y-4 h-full"
            >
              {/* First and Last Name */}
              <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex flex-col w-full sm:w-1/2">
                  <h2 className="text-base sm:text-lg">
                    First Name<span className="text-red-600 ml-1">*</span>
                  </h2>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full mt-1.5 h-9 px-4 text-base border border-gray-400 focus:border-blue-500 focus:outline-none rounded"
                    required
                  />
                </div>
                <div className="flex flex-col w-full sm:w-1/2">
                  <h2 className="text-base sm:text-lg">
                    Last Name<span className="text-red-600 ml-1">*</span>
                  </h2>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full mt-1.5 h-9 px-4 text-base border border-gray-400 focus:border-blue-500 focus:outline-none rounded"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col w-full">
                <h2 className="text-base sm:text-lg">
                  Email Address<span className="text-red-600 ml-1">*</span>
                </h2>
                <input
                  type="email"
                  name="user_email"
                  className="w-full mt-1.5 h-9 px-4 text-base border border-gray-400 focus:border-blue-500 focus:outline-none rounded"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col w-full">
                <h2 className="text-base sm:text-lg">Phone Number</h2>
                <input
                  type="tel"
                  name="user_phone"
                  className="w-full mt-1.5 h-9 px-4 text-base border border-gray-400 focus:border-blue-500 focus:outline-none rounded"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col w-full">
                <h2 className="text-base sm:text-lg">
                  Your Message<span className="text-red-600 ml-1">*</span>
                </h2>
                <textarea
                  name="message"
                  className="w-full mt-1.5 h-32 sm:h-40 px-4 py-2 text-base border border-gray-400 focus:border-blue-500 focus:outline-none rounded"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 bg-blue-700 text-white text-base hover:bg-blue-800 transition rounded"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-full h-0 pb-[100%] sm:pb-[75%] lg:pb-[100%] relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={Mocha || "/placeholder.svg"}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Contact Illustration"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
