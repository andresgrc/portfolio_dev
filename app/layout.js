import Script from "next/script";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Andres Garcia - Software Developer",
  description:
    "This is the portfolio of Andres Garcia. I am a full stack developer and a self-taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM}`}
        />
        {/* Preload GTM script */}
        <link
          rel="preload"
          href={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM}`}
          as="script"
        />
      </head>
      <body className={inter.className}>
        {/* Toast Notifications */}
        <ToastContainer />
        
        {/* Main Layout */}
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        
        {/* Footer Section */}
        <Footer />
        
        {/* GTM No-JS Fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
