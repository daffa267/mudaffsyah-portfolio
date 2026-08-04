import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"; // Pastikan baris ini ada

export const metadata: Metadata = {
  title: "M. Mudaffarsyah | Portfolio",
  description: "AI Engineer & Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning wajib ada di tag html biar nggak error
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-300">
        {/* Ini yang paling penting, bungkus children pakai ThemeProvider */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}