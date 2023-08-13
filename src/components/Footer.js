import { FaLinkedinIn, FaGithub, FaTwitter } from "../utils/icons";

function Footer() {
  return (
    <div className="flex flex-col mx-auto text-center bg-blue-500 dark:bg-slate-800 text-white py-2 m-0 space-y-2 w-full">
      <p className="text-base font-medium">
        Made with <span className="font-extrabold text-lg">{"</>"}</span> by
        Sneha Prajapati
      </p>
      <div className="flex justify-center space-x-3">
        <a href="https://www.linkedin.com/in/sneha-prajapati/">
          <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
        </a>
        <a href="https://github.com/snepraj2709">
          <FaGithub className="w-6 h-6 cursor-pointer" />
        </a>
        <a href="https://twitter.com/curious_sne">
          <FaTwitter className="w-6 h-6 cursor-pointer" />
        </a>
      </div>
      <p> &copy; 2023 | IMDB</p>
    </div>
  );
}

export default Footer;
