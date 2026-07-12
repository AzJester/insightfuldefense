import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://insightfuldefense.com"),
  title: "Insightful Defense | Mission-Focused Defense Technology Analysis",
  description:
    "Practitioner-focused analysis of emerging defense technologies and their implications for missions, testing, acquisition, and fielding.",
  applicationName: "Insightful Defense",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Insightful Defense",
    title: "Insightful Defense | Mission-Focused Defense Technology Analysis",
    description:
      "Clearer thinking for consequential defense decisions. Independent analysis of emerging technology, mission integration, testing, acquisition, and fielding.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Insightful Defense | Mission-Focused Analysis",
    description:
      "Clearer thinking for consequential defense decisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07131f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
