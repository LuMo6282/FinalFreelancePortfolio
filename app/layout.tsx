import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Lekton,
  Nunito_Sans,
  Oswald,
  Raleway,
  Syne,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";

const raleway = Raleway({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const lekton = Lekton({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const syne = Syne({
  variable: "--font-redline",
  subsets: ["latin"],
  weight: ["800"],
});

const inter = Inter({
  variable: "--font-chaptermade",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const oswald = Oswald({
  variable: "--font-lilo-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-lilo-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lucas Moraca — Builder",
  description: "I build products that make brands stand out.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${raleway.variable} ${cormorant.variable} ${lekton.variable} ${syne.variable} ${inter.variable} ${oswald.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
