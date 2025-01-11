import type { Metadata } from "next";
import { Source_Serif_4 } from 'next/font/google';
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arnav Bharti",
  description: "Arnav's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSerif4.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
