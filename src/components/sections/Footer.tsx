import { Link } from "react-router-dom";
import "../Styles.css";
import HeaderLogo from "../../assets/cb857sgqnwslzgtjnfv.svg";

const Footer = () => {
  return (
    <footer className="bg-muted text-white cards_colors_box border-t-2 py-4 px-[1rem] md:py-4 mt-12">
      <div className=" sm:flex justify-between pr-[30px]">
        <div className="flex flex-col items-start gap-4">
          <span className="flex w-full items-center">
            <img
              className="md:w-[38px] w-[34px] "
              src={HeaderLogo}
              alt="HeaderLogo"
            />
            <span className="text-lg text-white font-bold">URL Shortener</span>
          </span>
          <p className="text-muted-foreground font-medium">
            Shorten your links and share them with ease.
          </p>
        </div>

        <div className="grid gap-2">
          <h4 className="text-lg font-medium">Contact</h4>
          <p className="text-sm font-medium">@joshuamichaelozibo@gmail.com</p>
          <p className="text-sm font-medium">(234) 805-074-7790</p>
        </div>
      </div>
      <div className=" lg:w-[94%] md:w-[90%] m-auto mt-2 flex items-center justify-between">
        <p className="text-sm text-muted-foreground font-medium">
          &copy; 2024 URL Shortener. All rights reserved.
        </p>
        <div className="flex font-medium items-center gap-4">
          <Link to="" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link to="" className="text-sm hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
