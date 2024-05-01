import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import LayoutComponent from "@/components/ui/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kits spark",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Providers>
          <LayoutComponent>
            {children}
          </LayoutComponent>
        </Providers>


      </body>
    </html>
  );
}
