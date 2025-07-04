import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto">{children || <Outlet />}</main>
    </div>
  );
}
