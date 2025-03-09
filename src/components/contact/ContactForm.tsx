import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

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
  const { control, formState, handleSubmit } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid h-fit justify-center gap-6"
    >
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

      <button className="hover:opacity- mx-auto w-max cursor-pointer rounded-[5px] bg-[#1C2B3A] px-3.5 py-2.5 text-white">
        submit-message
      </button>
    </form>
  );
};
