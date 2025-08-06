'use client'
import AdminBar from "@/Pages/adminBar";
import { Dashboard } from "@/Pages/dashboard";
import SideBar from "@/Pages/sideBar";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="flex flex-row gap-7">
        <SideBar />
        <div>
          <AdminBar />
          <Dashboard />
          </div>

      </div>

    </div>
  );
}

