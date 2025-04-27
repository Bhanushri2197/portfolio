import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import contactImg from "../assets/img/contact-img.png"

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "bhanushri21";
    const templateId = "template_0y9m6xs";
    const publicKey = "U8aqM2S8xGoR8Qf44";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Bhanushri P",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Message sent successfully! ✅"); // Toast on success
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error in sending email", error);
        toast.error("Failed to send message. Please try again! ❌"); // Toast on error
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="bgPrimary text-white opacity-95">
      <div className="container mx-auto">
        <div
          className="flex justify-center items-center h-screen bg-cover bg-center px-4"      >
            <div className="hidden md:flex justify-center items-center imgBlock w-1/2">
                    <img className="delay-[300ms] duration-[600ms] w-2/3 taos:translate-x-[100%] taos:opacity-0" data-taos-offset="400" src={contactImg} alt="" />
            </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 sm:p-10 rounded-xl shadow-lg w-full max-w-lg text-white">
            <h2 className="text-2xl font-bold text-center mb-6">
              Contact Us Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="First Name"
                  className="w-full p-2 bg-transparent border-b outline-none text-white placeholder-gray-300"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  className="w-full p-2 bg-transparent border-b outline-none text-white placeholder-gray-300"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <textarea
                name="message"
                placeholder="Type Your Message Here..."
                className="w-full p-2 bg-transparent border-b outline-none text-white placeholder-gray-300"
                rows="3"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-2 mt-4 rounded-lg hover:bg-gray-200 transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
