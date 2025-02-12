import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalogo de Productos",
  description: "Catalogo de Productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main>
        {children}
        </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
      </body>
    </html>
  );
}
