import { Inter } from "next/font/google";
import Providers from "./Providers";
import "@xyflow/react/dist/style.css";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSON Map",
  description: "Visualize your JSON structures using JSON Map",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;

