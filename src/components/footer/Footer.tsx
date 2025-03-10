import { FooterTelegram } from "../../assets/footerImage/FooterTelegram";
import { FooterInstagram } from "../../assets/footerImage/FooterInstagram";
import { FooterGithub } from "../../assets/footerImage/FooterGithub";
import { FooterTwitter } from "../../assets/footerImage/FooterTwitter";

export const Footer = () => {
  return (
    <footer className="grid w-full grid-cols-none justify-center border-t-[1px] border-[#1E2D3D] min-[486px]:grid-cols-[311px_1fr] min-[486px]:justify-between">
      <div className="flex w-full items-center justify-between">
        <span className="px-5 py-4 whitespace-nowrap">find me in: </span>
        <a
          className="nav relative flex h-full w-[52px] items-center p-3 min-[486px]:border-x-[1px]"
          href={"#"}
        >
          <FooterTwitter />
        </a>
        <a
          className="nav relative flex h-full w-[52px] items-center p-3 min-[486px]:border-r-[1px]"
          href="https://www.instagram.com/nvxcool?igsh=Z2tnMnMzYWJ4MG9v&utm_source=qr"
        >
          <FooterInstagram />
        </a>
        <a
          className="nav relative flex h-full items-center p-3 min-[486px]:border-r-[1px]"
          href={"https://telegram.me/nvcool"}
        >
          <FooterTelegram />
        </a>
      </div>
      <a
        href="https://github.com/nvcool"
        className="nav relative ml-auto flex w-full max-w-[153px] items-center justify-center gap-1 border-[#1E2D3D] p-4 text-[#607B96] min-[486px]:border-l-[1px]"
      >
        @nvcool <FooterGithub />
      </a>
    </footer>
  );
};
