import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import AOSInit from "@/components/AOSInit";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSInit />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingWA />
    </>
  );
}
