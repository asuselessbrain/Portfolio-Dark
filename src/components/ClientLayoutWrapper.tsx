"use client";

import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import { usePathname } from "next/navigation";
import * as analytics from "@/utils/analytics";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    analytics.pageview(pathname);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative text-slate-100 selection:bg-[#126972]/40 selection:text-white bg-[#0f172a]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main content body with slide transitions */}
      <main className="flex-grow pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full z-10">
        <PageTransition>{children}</PageTransition>
      </main>

      {/* Modern Multi-Column Footer */}
      <Footer />
    </div>
  );
}

