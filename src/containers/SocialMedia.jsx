import { SocialMediaIcon } from "../components";

import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <section className="fixed bottom-4 left-5 gap-5 z-50">

      <a href="http://" className="flex bg-slate-300/50 p-2.5 my-1 z-50 rounded-lg rounded-bl-lg  backdrop-blur-sm">
        <FaTwitter className="text-blue-600 text-xl hover:text-blue-400 cursor-pointer" />
      </a>
      <a href="http://" className="flex bg-slate-300/50 p-2.5 my-1 z-50 rounded-lg rounded-bl-lg  backdrop-blur-sm">
        <FaYoutube className="text-red-600 text-xl hover:text-red-400 cursor-pointer" />
      </a>
      <a href="https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BxNgp7L7OTEGz3vBK6fZaAA%3D%3D" 
          className="flex bg-slate-300/50 p-2.5 my-1 z-50 rounded-lg rounded-bl-lg  backdrop-blur-sm">
        <FaLinkedin className="text-blue-800 text-xl hover:text-blue-400 cursor-pointer" />
      </a>
      <a href="https://www.instagram.com/invites/contact/?i=tdv04nb5fdrs&utm_content=mi5slzi" className="flex bg-slate-300/50 p-2.5 my-1 z-50 rounded-lg rounded-bl-lg  backdrop-blur-sm">
        <FaInstagram className="text-pink-500 text-xl hover:text-rose-600 cursor-pointer" />
      </a>
      <a href="https://www.facebook.com/ignatius.kip.10" className="flex bg-slate-300/50 p-2.5 my-1 z-50 rounded-lg rounded-bl-lg  backdrop-blur-sm">
        <FaFacebook className="text-blue-600 text-xl hover:text-blue-400 cursor-pointer" />
      </a>


    </section>
  );
};

export default SocialMedia;
