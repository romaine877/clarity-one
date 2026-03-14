import type { Metadata } from "next";
import { Ubuntu, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clarity One Studios | Software Development Agency",
  description:
    "Software development agency building custom web apps, internal tools, and digital platforms for growing businesses.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ubuntu.variable} ${inter.variable} antialiased`}>
        {children}
        <Toaster position="bottom-center" theme="dark" richColors />
      </body>
    </html>
  );
}
