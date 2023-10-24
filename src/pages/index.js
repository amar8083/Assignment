import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import MainSection from "../../components/home/MainSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <Footer />
    </>
  );
}
