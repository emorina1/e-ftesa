import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Ftesa",
  description: "Ftesa digjitale për momentet tuaja të veçanta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}