import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { useState } from "react";

interface IContactFormProps {
  setWatchWrite: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      text: string;
    }>
  >;
  watchWrite: {
    name: string;
    email: string;
    text: string;
  };
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Enter correct name !" }),
  email: z.string().email(),
  text: z.string().min(50, { message: "Min 50 simvolov !" }),
});

export const ContactForm = ({
  watchWrite,
  setWatchWrite,
}: IContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false); // состояние для отслеживания загрузки
  const [isSuccess, setIsSuccess] = useState(false); // состояние для отслеживания успешной отправки
  const [isError, setIsError] = useState(false); // состояние для отслеживания ошибки
  const [formSubmitted, setFormSubmitted] = useState(false); // состояние для отслеживания отправки формы

  const { control, formState, handleSubmit } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    setIsLoading(true); // Включаем загрузку
    setIsSuccess(false); // Сбрасываем статус успеха
    setIsError(false); // Сбрасываем статус ошибки

    // Добавляем задержку перед отправкой (например, 1 секунда)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Задержка 1 секунда

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Добавляем заголовок Content-Type
        },
        body: JSON.stringify(data), // Отправляем данные в формате JSON
      });

      if (response.ok) {
        setIsSuccess(true); // Если запрос успешный, обновляем состояние
        setFormSubmitted(true); // Устанавливаем, что форма была отправлена
      } else {
        setIsError(true); // Если ошибка на сервере, обновляем состояние
      }
    } catch (error) {
      setIsError(true); // Если ошибка в запросе, обновляем состояние
    } finally {
      setIsLoading(false); // Завершаем загрузку
    }
  };
  console.log(formState.errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="flex justify-center">
        {isSuccess && !isLoading && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {isError && !isLoading && (
          <p className="text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
      {formSubmitted ? (
        <div className="mx-auto text-center">
          <p className="text-green-500">Thank you for your message!</p>
        </div>
      ) : (
        <div className="grid h-fit justify-center gap-6">
          <div className="grid w-[250px] min-[1263px]:w-[372px]">
            <label htmlFor="name">_name</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field, fieldState }) => (
                <div className="relative grid">
                  <Input
                    {...field}
                    isError={!!fieldState.error}
                    onChange={(e) => {
                      field.onChange(e);
                      setWatchWrite({ ...watchWrite, name: e.target.value });
                    }}
                    className=""
                    id="name"
                    type="text"
                  />
                  {fieldState.error && (
                    <span className="absolute -bottom-5 left-1/3 text-center text-xs text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>

          <div className="grid w-[250px] min-[1263px]:w-[372px]">
            <label htmlFor="email">_email</label>
            <Controller
              name="email"
              defaultValue=""
              control={control}
              render={({ field, fieldState }) => (
                <div className="relative grid">
                  <Input
                    {...field}
                    isError={!!fieldState.error}
                    onChange={(e) => {
                      field.onChange(e);
                      setWatchWrite({ ...watchWrite, email: e.target.value });
                    }}
                    className=""
                    id="email"
                    type="email"
                  />
                  {fieldState.error && (
                    <span className="absolute -bottom-5 left-1/3 text-center text-xs text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>

          <div className="grid w-[265px] min-[1263px]:w-[372px]">
            <Controller
              name="text"
              defaultValue=""
              control={control}
              render={({ field, fieldState }) => (
                <div className="relative grid">
                  <Textarea
                    {...field}
                    isError={!!fieldState.error}
                    onChange={(e) => {
                      field.onChange(e);
                      setWatchWrite({ ...watchWrite, text: e.target.value });
                    }}
                    name="text"
                    id="text"
                  />
                  {fieldState.error && (
                    <span className="absolute -bottom-5 left-1/3 text-center text-xs text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>

          <button
            disabled={isLoading}
            className="hover:opacity- mx-auto w-max cursor-pointer rounded-[5px] bg-[#1C2B3A] px-3.5 py-2.5 text-white"
          >
            {isLoading ? "Submitting..." : "Submit Message"}
          </button>
        </div>
      )}
    </form>
  );
};
