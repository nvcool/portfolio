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
    <div className="grid lg:flex lg:h-full">
      <div className="flex py-5 pl-3 text-white lg:hidden">_contact-me</div>
      <ContactBar />
      <div className="flex w-full flex-col">
        <ContactBarHistory />
        <div className="grid h-full grid-cols-1 py-5 min-[711px]:grid-cols-2 min-[711px]:py-0">
          <div className="grid items-center border-r-0 border-[#1E2D3D] lg:border-r-[1px]">
            <ContactForm
              watchWrite={watchWrite}
              setWatchWrite={setWatchWrite}
            />
          </div>
          <ContactFormWrite watchWrite={watchWrite} />
        </div>
      </div>
    </div>
  );
};
