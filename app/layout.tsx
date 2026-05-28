import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Edomias International Plc — Premier HR Solutions in Ethiopia",
    template: "%s | Edomias International Plc",
  },
  description:
    "Ethiopia's leading HR outsourcing and recruitment company since 2005. Staffing, cleaning, security, landscaping, and modern job portal with ERP integration.",
  keywords: ["HR outsourcing Ethiopia", "recruitment Ethiopia", "Edomias", "staffing Ethiopia"],
  openGraph: {
    title: "Edomias International Plc — Premier HR Solutions",
    description: "Ethiopia's #1 HR outsourcing partner since 2005",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
