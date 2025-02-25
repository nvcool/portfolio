import { NavLink } from "react-router";
import twitter from "../assets/footer/footer-twitter.svg";
import facebook from "../assets/footer/footer-facebook.svg";
import github from "../assets/footer/footer-github.svg";
import { FooterTelegram } from "../assets/footer/FooterTelegram";

export const Footer = () => {
  return (
    <footer className="grid w-full justify-center border-t-[1px] border-[#1E2D3D] min-[424px]:flex min-[424px]:justify-between">
      <div className="justify-betweens flex items-center">
        <span className="px-5 py-4 text-[#607B96]">find me in: </span>
        <NavLink
          className="nav relative p-4 min-[424px]:border-x-[1px]"
          to={"/"}
        >
          <img className="h-[25px] object-cover" src={twitter} alt="Twitter" />
        </NavLink>
        <NavLink
          className="nav relative p-4 min-[424px]:border-r-[1px]"
          to={facebook}
        >
          <img
            className="h-[25px] object-cover"
            src={facebook}
            alt="Facebook"
          />
        </NavLink>
        <NavLink
          className="nav relative p-4 min-[424px]:border-r-[1px]"
          to={"https://telegram.me/nvcool"}
        >
          <FooterTelegram />
        </NavLink>
      </div>
      <NavLink
        to={"https://github.com/nvcool"}
        className="nav relative flex items-center gap-1 border-[#1E2D3D] p-4 text-[#607B96] min-[424px]:border-l-[1px]"
      >
        @nvcool <img className="h-fit" src={github} alt="GitHib" />
      </NavLink>
    </footer>
  );
};
