// app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
// import the ThemeProvider, which is a Client Component,
// from the providers directory
import { ThemeProvider } from '@/providers/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import ModalProvider from '@/providers/modal-provider';
import { Toaster } from '@/components/ui/sonner';

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
                <ClerkProvider>
                    <ThemeProvider
                        attribute="class" // Use 'class' to apply dark mode, not 'style' or 'data-theme'
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <ModalProvider>
                            {children}
                        </ModalProvider>

                    </ThemeProvider>
                </ClerkProvider>
                <Toaster />

            </body>
        </html>
    );
}
