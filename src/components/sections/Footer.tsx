import { Link } from "react-router-dom";
import "../Styles.css";

const Footer = () => {
  return (

    <footer className="bg-muted py-8 md:py-12">
      <div className=" flex justify-between pr-[30px]">
        <div className="flex flex-col items-start gap-4">
          <Link to='' className="flex items-center gap-2">
            
            <span className="text-lg font-bold">URL Shortener</span>
          </Link>
          <p className="text-muted-foreground">Shorten your links and share them with ease.</p>
        </div>
        
        <div className="grid gap-2">
          <h4 className="text-lg font-medium">Contact</h4>
          <p className="text-sm">support@urlshortener.com</p>
          <p className="text-sm">(123) 456-7890</p>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">&copy; 2024 URL Shortener. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link to='' className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link to='' className="text-sm hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
