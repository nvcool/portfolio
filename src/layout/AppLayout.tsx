import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const AppLayout = () => {
  return (
    <div className="grid min-h-screen p-[15px] sm:p-[48px] lg:p-[69px]">
      <div className="relative h-full rounded-[8px] border-[1px] border-[#1E2D3D] bg-[#011627]">
        <Header />
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
