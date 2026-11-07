import { Saira, Inter } from "next/font/google";
import "./globals.css";

const saira = Saira({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Jayma Motors — Coming Soon",
  description: "Jayma Motors is getting ready. Our new website is under construction.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${saira.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
