import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const AppLayout = () => {
  return (
    <div className="bg-[#011627] h-[860px] rounded-[8px] border-[1px] border-[#1E2D3D]">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
