import type { Metadata } from "next";
import { DM_Sans} from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
      suppressHydrationWarning
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
