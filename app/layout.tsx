import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David | Personal Portfolio",
  description: "David is a React Developer with 8 years of experience",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} `}>
      <body>
        <div className="bg-left-orb"></div>
        <div className="bg-right-orb"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
