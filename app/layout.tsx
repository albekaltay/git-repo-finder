import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutContainer } from "@/layout";
import { Providers } from "@/store/provider";
import { AuthProvider } from "@/providers/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Git Repo Finder",
  description:
    "You can find your github repositories, stars, forks, and last update date.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children && (
          <AuthProvider>
            <Providers>
              <LayoutContainer>{children}</LayoutContainer>
            </Providers>
          </AuthProvider>
        )}
      </body>
    </html>
  );
}
