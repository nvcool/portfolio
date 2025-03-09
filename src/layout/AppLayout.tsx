import { Outlet } from "react-router";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const AppLayout = () => {
  return (
    <div className="grid min-h-screen p-[15px] sm:p-[48px] lg:p-[69px]">
      <div className="relative flex flex-col justify-between rounded-[8px] border-[1px] border-[#1E2D3D] bg-[#011627]">
        <Header />
        <main className="h-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
