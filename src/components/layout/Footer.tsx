import { professionalTitle } from "@/constants/title";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 backdrop-blur-sm py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex">
            <p className="text-gray-400 text-md">
              © {new Date().getFullYear()} Héctor Colón Morales &nbsp;|&nbsp;&nbsp;
            </p>
            <p className="text-gradient">{professionalTitle}</p>
          </div>
          <div className="mt-4 md:mt-0 flex">
            <p className="text-gray-400 text-md">
              Built with <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-portfolio-primary hover:underline relative">lovable.dev</a> & Modified by Me
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
