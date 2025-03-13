import AboutPreviewSlider from "./AboutPreviewSlider";

export const AboutPreview = () => {
  return (
    <div className="relative grid h-full">
      <div className="animate-blob absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#43D9AD] opacity-40 blur-[87px]"></div>
      <div className="animate-blob animation-delay-2000 absolute -right-20 -bottom-40 h-80 w-80 rounded-full bg-[#4D5BCE] opacity-40 blur-[87px]"></div>
      <AboutPreviewSlider />
    </div>
  );
};
