import { Link } from "react-router-dom";
import "../Styles.css";
import HeaderLogo from "../../assets/cb857sgqnwslzgtjnfv.svg";

const Footer = () => {
  return (
    <footer className=" w-full break-words overflow-hidden m-auto mt-[100px] cards_colors_box py-5 text-white">
      <main className=" grid break-words lg:grid-cols-4 md:text-center md:grid-cols-3 grid-cols-2 justify-between md:gap-10 gap-3 items-center md:mx-10 mx-[1rem] ">
        <div className="flex flex-col items-start gap-4">
          <span className="flex w-full items-center">
            <img
              className="md:w-[38px] w-[34px] "
              src={HeaderLogo}
              alt="HeaderLogo"
            />
            <span className="text-lg text-white font-bold">Swift-Short</span>
          </span>
          <p className="text-muted-foreground font-medium">
            Shorten your links and share them with ease.
          </p>
        </div>

        <div className="md:grid md:gap space-y-1">
          <h4 className="text-lg font-medium">Contact</h4>
          <p className="text-sm font-medium">@joshuamichaelozibo@gmail.com</p>
          <p className="text-sm font-medium">(234) 805-074-7790</p>
        </div>

        <div className="w-full">
          <p className="text-sm  text-muted-foreground font-medium">
            &copy; 2024 URL Shortener. All rights reserved.
          </p>
        </div>

        <div className="">
          <Link to="" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link to="" className="text-sm hover:underline">
            Terms of Service
          </Link>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
