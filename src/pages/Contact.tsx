import { useState } from "react";
import { ContactBar } from "../components/contact/ContactBar";
import { ContactBarHistory } from "../components/contact/ContactBarHistory";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactFormWrite } from "../components/contact/ContactFormWrite";

export const Contact = () => {
  const [watchWrite, setWatchWrite] = useState({
    name: "",
    email: "",
    text: "",
  });

  return (
    <section className="grid lg:flex lg:h-full">
      <div className="flex py-5 pl-3 text-white lg:hidden">_contact-me</div>
      <ContactBar />
      <div className="flex w-full flex-col py-5 lg:py-0">
        <ContactBarHistory />
        <div className="grid h-full grid-cols-1 gap-3 min-[711px]:grid-cols-2 min-[711px]:py-0 lg:gap-0">
          <div className="grid items-center border-t-[1px] border-[#1E2D3D] pt-5 min-[711px]:border-t-[0px] min-[711px]:pt-0 lg:border-r-[1px]">
            <ContactForm
              watchWrite={watchWrite}
              setWatchWrite={setWatchWrite}
            />
          </div>
          <ContactFormWrite watchWrite={watchWrite} />
        </div>
      </div>
    </section>
  );
};
