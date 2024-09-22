import type { Metadata } from "next";
import { Gotu } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

// Import Gotu from Google Fonts
const gotu = Gotu({
  subsets: ["latin"],
  variable: "--font-gotu",
  weight: ["400"], 
});

export const metadata: Metadata = {
  title: `BrandImp`, 
  description: `A project Management and AI company`, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gotu.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
