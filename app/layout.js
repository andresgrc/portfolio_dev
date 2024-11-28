import dynamic from "next/dynamic"; // For dynamic imports
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import GoogleTagManager with SSR disabled
const GoogleTagManager = dynamic(
  () =>
    import("@next/third-parties/google").then((mod) => mod.GoogleTagManager),
  { ssr: false }
);

export const metadata = {
  title: "Portfolio of Andres Garcia - Software Developer",
  description:
    "This is the portfolio of Andres Garcia. I am a full stack developer and a self-taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

// Ensure ScrollToTop handles window access safely
function SafeScrollToTop() {
  if (typeof window === "undefined") return null; // Prevent SSR issues
  return <ScrollToTop />;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Toast notifications */}
        <ToastContainer />

        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {/* Navigation */}
          <Navbar />

          {/* Main content */}
          {children}

          {/* Scroll to top */}
          <SafeScrollToTop />
        </main>

        {/* Footer */}
        <Footer />

        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        )}
      </body>
    </html>
  );
}
