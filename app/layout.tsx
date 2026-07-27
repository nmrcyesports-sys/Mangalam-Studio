import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "Mangalam Studio | Premium Photography in Dhanbad",
  description: "Expert wedding photography, studio portraits, and photo printing in Dhansar, Dhanbad. Call +91 70508 80507 to book.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${montserrat.variable} bg-studio-black text-studio-textMain font-montserrat antialiased`}>
        {children}
      </body>
    </html>
  );
}

