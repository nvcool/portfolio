interface IContactFormWriteProps {
  watchWrite: {
    name: string;
    email: string;
    text: string;
  };
}

export const ContactFormWrite = ({ watchWrite }: IContactFormWriteProps) => {
  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short", // Сокращенное имя дня недели (Thu)
    day: "2-digit", // Двухзнычный день месяца (21)
    month: "short", // Сокращенное название месяца (Apr)
  };

  let dateString = date.toLocaleDateString("en-GB", options);
  dateString = dateString.replace(",", "");

  return (
    <div className="-order-1 flex items-center justify-center px-5 text-[14px] min-[711px]:order-1 min-[1263px]:text-[16px]">
      <div className="grid w-full max-w-[520px] gap-1 break-all">
        <span>
          <span className="pr-5">1</span>{" "}
          <span className="text-[#C98BDF]">const</span>{" "}
          <span className="text-[#5565E8]">button</span>{" "}
          <span className="text-[#C98BDF]">=</span>
          <span className="text-[#5565E8]"> document.querySelector</span>
          {`(`}
          <span className="text-[#FEA55F]">'#sendBtn'</span>
          {`)`};
        </span>{" "}
        <span>2</span>
        <span>
          <span className="pr-5">3</span>{" "}
          <span className="text-[#C98BDF]">const</span>{" "}
          <span className="text-[#5565E8]">message</span>{" "}
          <span className="text-[#C98BDF]">=</span> {`{`}
        </span>{" "}
        <span>
          <span className="pr-7.5">4</span>{" "}
          <span className="text-[#5565E8]">name</span>:{" "}
          <span className="text-[#FEA55F]">"{watchWrite.name}"</span>,{" "}
        </span>{" "}
        <span>
          <span className="pr-7.5">5</span>{" "}
          <span className="text-[#5565E8]">email</span>:{" "}
          <span className="text-[#FEA55F]">"{watchWrite.email}"</span>,{" "}
        </span>{" "}
        <span>
          <span className="pr-7.5">6</span>{" "}
          <span className="text-[#5565E8]">message</span>:{" "}
          <span className="text-[#FEA55F]">"{watchWrite.text}"</span>,{" "}
        </span>{" "}
        <span>
          <span className="pr-7.5">7</span> date:{" "}
          <span className="text-[#FEA55F]">"{dateString}"</span>{" "}
        </span>{" "}
        <span>
          <span className="pr-5">4</span> {`}`}
        </span>{" "}
        <span>9</span>
        <span>
          <span className="pr-3">10</span>{" "}
          <span className="text-[#5565E8]">button.addEventListener</span>
          {`(`}
          <span className="text-[#FEA55F]">'click'</span>, {`()`}{" "}
          <span className="text-[#C98BDF]">{`=>`}</span> {`{ `}
        </span>{" "}
        <span>
          <span className="pr-5.5">11</span>{" "}
          <span className="text-[#5565E8]">form.send</span>
          {`(`}
          <span className="text-[#5565E8]">message</span>
          {`)`};{" "}
        </span>{" "}
        <span>
          <span className="pr-3">12</span> {`}) `}
        </span>{" "}
      </div>
    </div>
  );
};
