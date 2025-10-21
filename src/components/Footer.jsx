import footerData from "../data/footerData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2'
import {useEmailJS} from "../hooks/useEmailJs.jsx";
import {useState} from "react";

const Footer = () => {

  const { sendEmail, status } = useEmailJS();
  const [formData, setFormData] = useState({ email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email) {
      Swal.fire({
        title: "Missing Info ",
        text: "Please fill in all fields before sending.",
        icon: "warning",
        confirmButtonColor: "#1F2937",
      });
      return;
    }

    await sendEmail(formData);

    if (status === "success") {
      Swal.fire({
        title: "Subscribed! 🎉",
        text: "Thank you for subscribing! Please check your inbox for a confirmation email 💌",
        icon: "success",
        confirmButtonColor: "#1F2937",
      });
      setFormData({ email: "" });
    } else if (status === "error") {
      Swal.fire({
        title: "Oops 😢",
        text: "Something went wrong while subscribing. Please try again later!",
        icon: "error",
        confirmButtonColor: "#1F2937",
      });
    }
  };
  return (
      <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="flex items-center text-2xl font-bold mb-2 gap-2">
              <i className={`${footerData.brand.icon} text-gray-800 dark:text-white text-xl`}></i>
              {footerData.brand.name}
            </h3>
            <p className="text-sm text-gray-800 dark:text-white">
              {footerData.brand.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <i className={`${footerData.navigationIcon} text-base`}></i>
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {footerData.navigation.map((item, index) => (
                  <li key={index}>
                    <a
                        href={item.href}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      {item.label}
                    </a>
                  </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <i className={`${footerData.socialsIcon} text-base`}></i>
              Find Me Online
            </h4>
            <ul className="flex flex-wrap gap-3">
              {footerData.socials.map((social, index) => (
                  <li key={index}>
                    <Tippy content={social.label} placement="top">
                      <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-800 shadow-md hover:scale-110 transition-all">
                          <i className={`${social.icon} text-xl`} />
                        </div>
                      </a>
                    </Tippy>
                  </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Form */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <i className="bx bx-mail-send text-base" />
              {footerData.formSubscription.title}
            </h4>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {footerData.formSubscription.description}
            </p>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={footerData.formSubscription.placeholder}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              />

              <Tippy content="Subscribe to my newsletter!">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-4 py-3 bg-gray-800 shadow-lg text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 leading-none text-base"
                >
                  {status === "loading" ? "Sending..." : footerData.formSubscription.buttonText}
                  <i className="bx bx-send text-[1.2rem] translate-y-[1px]" />
                </button>
              </Tippy>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-800 dark:border-gray-700" />

        {/* Bottom Footer */}
        <div className="mt-8 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-800 dark:text-white gap-4">
          <div className="flex gap-4 flex-wrap">
            {footerData.legalLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {link.label}
                </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            {footerData.copyright}
          </div>
        </div>
      </footer>
  );
};

export default Footer;