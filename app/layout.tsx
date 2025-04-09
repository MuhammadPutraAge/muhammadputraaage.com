import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "sonner";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  icons: "/favicon.ico",
  title: "Muhammad Putra Age",
  description:
    "Hi, I'm Muhammad Putra Age, a Frontend Engineer specializing in crafting modern, responsive, and user-friendly web and mobile applications. Explore my portfolio to see my work and services.",
  openGraph: {
    title: "Muhammad Putra Age",
    description:
      "Hi, I'm Muhammad Putra Age, a Frontend Engineer specializing in crafting modern, responsive, and user-friendly web and mobile applications. Explore my portfolio to see my work and services.",
    images: ["/assets/og-image.png"],
    siteName: "Muhammad Putra Age",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Putra Age",
    description:
      "Hi, I'm Muhammad Putra Age, a Frontend Engineer specializing in crafting modern, responsive, and user-friendly web and mobile applications. Explore my portfolio to see my work and services.",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
