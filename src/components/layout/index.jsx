import { Outlet } from "react-router-dom";
import NavigationTitle from "@components/layout/NavigationTitle";
import NavigationBar from "@components/layout/NavigationBar";

export default function Layout() {
  return (
    <div className="l_container max-w-[393px] h-screen mx-auto flex flex-col">
      <NavigationTitle />

      <Outlet />

      <NavigationBar />
    </div>
  );
}
