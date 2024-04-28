import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageSection from "./components/PageSection";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix",
  description: "enjoy your time with watching kinds of movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <PageSection>
          <Footer />
        </PageSection>
      </body>
    </html>
  );
}
