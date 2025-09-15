// app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
// import the ThemeProvider, which is a Client Component,
// from the providers directory
import { ThemeProvider } from '@/providers/theme-provider';

const font = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowForge ",
  description: "Automate your work with FlowForge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class" // Use 'class' to apply dark mode, not 'style' or 'data-theme'
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
